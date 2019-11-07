import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';

import UserDashSingleCard from '../UserDashSingleCard';
import { sendGetRequest } from '../../actions';

const MentorModal = React.lazy(() => import('../UserMentorDialog'));

function DashHomeList() {
  const [mentors, setMentors] = useState([]);
  const [openDialog, setOpenDialog] = useState({
    isOpen: false,
    id: '',
  });
  const [mentorData, setMentorData] = useState();

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_BACKEND_URL}/user/mentors`,
    }).then(res => {
      setMentors(res.data.payload);
      console.log(res.data.payload);
    });
  }, []);

  function openDialogHandler(e) {
    e.preventDefault();
    setOpenDialog({ ...openDialog, isOpen: true, id: e.target.id });
  }

  useEffect(() => {
    if (openDialog.id) {
      sendGetRequest(`/user/${openDialog.id}`).then(res => {
        setMentorData(res.data.payload);
      });
    }
  }, [openDialog]);

  return (
    <>
      {openDialog.isOpen ? (
        <Suspense fallback={<h1>Loading</h1>}>
          <MentorModal data={mentorData} />
        </Suspense>
      ) : null}
      <section className="user-dash-users-list">
        <p className="user-section-heading">
          <img src="/assets/img/hiring.svg" /> Available Mentors
          <div>
            <input
              type="text"
              name="user-dash-search"
              placeholder="Search Mentors by Stack, Location or Name"
            />
            <img alt="search" src="/assets/img/icons8-search.svg" />
          </div>
        </p>
        <div className="users-listing">
          {mentors.map(mentor => {
            return (
              <UserDashSingleCard
                key={mentor.id}
                username={mentor.name}
                briefDescription={mentor.bio}
                email={mentor.email}
                location={mentor.location}
                stacks={mentor.skills}
                coverImage={mentor.avatar}
                id={mentor.id}
                viewMore={openDialogHandler}
                profileImage={mentor.avatar}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default DashHomeList;

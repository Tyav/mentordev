import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

//Components
import UserDashSingleCard from '../../components/UserDashSingleCard';
import UserDashFilterFunc from '../../components/UserDashFilterFunc';

//Helpers
import { sendGetRequest } from '../../actions';
import { readCookie } from '../../helper/cookie';

//Styling
import './MentorRequest.css';

function MentorRequest() {
  const token = readCookie('mentordev_token');
  const [schedules, setSchedules] = useState({ data: [], loading: true });
  const [userRequest, setUserRequest] = useState([]);

  useEffect(() => {
    getSchedule();
  }, []);

  console.log(schedules);

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  const getSchedule = () => {
    return axios({
      method: 'GET',
      url: `${process.env.REACT_APP_BACKEND_URL}/user/me/schedules`,
      headers,
    })
      .then(response => {
        setSchedules(() => ({ data: response.data.payload, loading: false }));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="new-mentor-request">
        <UserDashFilterFunc />
        <section>
          <UserDashSingleCard
            username="OKE TEGA"
            briefDescription="I am an aspiring Sofware Engineer from Lagos, Nigeria"
            email="oketegah@gmail.com"
            location="Lagos, Nigeria"
            stacks={['PHP', 'Javascript']}
            coverImage="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1567&amp;q=80"
            profileImage="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1567&amp;q=80"
          />
        </section>
      </div>
    </>
  );
}

export default MentorRequest;

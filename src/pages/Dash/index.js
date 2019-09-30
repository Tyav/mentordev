import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import UserProfile from '../../components/UserProfile';
import UserSearch from '../../components/UserSearch';
import UserMenu from '../../components/UserMenu';
import UserDashHeading from '../../components/UserDashHeading';
import UserScheduleList from '../../components/UserSchedule';
import UserContactList from '../../components/UserContactList';
import UserConnects from '../../components/UserConnects';
import EditProfile from './EditProfile';
import ScheduleRequests from '../../components/ScheduleRequest';
import Search from '../Search';
import AllMentorRequests from '../../components/AllMentorRequests';
import ScheduleList from './ScheduleList';
import Request from './Request';
import { readCookie, eraseCookie, createCookie } from '../../helper/cookie';
// import Button from '../../components/Button';
import InputField from '../../components/InputField';
import Card from '../../components/Card';
import getParams from '../../helper/getParams';

function Dashboard() {
  const mentor = getParams('auth');
  if (mentor === 'true') createCookie('validateType', true);
  if (getParams('token')) createCookie('mentordev_token', getParams('token'));
  const [opener, setOpen] = useState(true);
  const [sideNavState, setSideNavState] = useState(false);
  const [linkedin, setLinkedin] = useState('');
  const token = readCookie('mentordev_token');
  const sS = readCookie('s_s');
  const isMentor = readCookie('validateType');

  const sideNavHandler = e => {
    e.preventDefault();
    setSideNavState(!sideNavState);
    const sideNav = document.querySelector('.new-dash-menu');
    const navToggler = document.querySelector('.new-dash-menu-toggler');

    if (sideNavState) {
      sideNav.classList.add('show-side-nav');
      navToggler.classList.add('cross-bar');

      return;
    }
    sideNav.classList.remove('show-side-nav');
    navToggler.classList.remove('cross-bar');
  };

  if (!token) {
    return <Redirect to="/login" />;
  }
  function handleClose(e) {
    e.preventDefault();
    sS ? setOpen(true) : setOpen(false);
    return opener;
  }
  function handleClose1(e) {
    e.preventDefault();
    //update user info with linkedin
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    axios({
      method: 'PUT',
      url: `${process.env.REACT_APP_BACKEND_URL}/user/signupUpdate`,
      headers,
      data: { ...linkedin },
    }).then(({ data }) => {
      alert(JSON.stringify(data));
      if (data.payload.isMentor)
        createCookie('validateType', data.payload.isMentor);
      setOpen(false);
    });
  }
  function updateHandler(e) {
    // e.preventDefault();
    setLinkedin({
      ...linkedin,
      [e.target.name]: e.target.value.split(', '),
    });
  }
  function updateHandlerT(e, value) {
    //e.preventDefault();
    setLinkedin({
      ...linkedin,
      [e.target.name]: value,
    });
  }
  const handleLogOut = event => {
    event.preventDefault();
    eraseCookie('mentordev_token');
    eraseCookie('validateType');
  };

  return (
    <>
      <nav className="new-dash-nav">
        <span className="new-dash-menu-toggler" onClick={sideNavHandler}>
          <div />
        </span>

        <a href="/" className="new-dash-nav-logo">
          Mentor <span>/>ev</span>
        </a>
        {!isMentor ? (
          <UserSearch />
        ) : (
          <span className="admin-sub-search-nav"/>
        )}
        <UserMenu validateType={isMentor} />
      </nav>
      <main className="new-dash-body">
        <div className="new-dash-left">
          <div className="new-dash-search">
            <UserSearch />
          </div>
          <UserProfile />
        </div>
        <div className="new-dash-mentor-list">
          <Route exact path="/dashboard" component={UserConnects} />
          <Route path="/dashboard/profile" component={EditProfile} />
          <Route path="/dashboard/time-slot" component={ScheduleList} />
          <Route exact path="/dashboard/search" component={Search} />
          <Route
            path="/dashboard/mentor/requests/:scheduleId"
            component={ScheduleRequests}
          />
          <Route
            // path="/dashboard/mentor/allRequests"
            path="/dashboard/mentor/all-requests"
            component={AllMentorRequests}
          />
          <Route path="/dashboard/request" component={Request} />
        </div>
        <div className="new-dash-right">
          {!isMentor ? '' : <UserScheduleList />}
          <div className="new-dash-contact-list">
            {!isMentor ? (
              <UserDashHeading text="Your Mentors List" icon="contacts" />
            ) : (
              <UserDashHeading text="Your Mentees List" icon="contacts" />
            )}

            <UserContactList />
          </div>
        </div>
      </main>
      <Dialog open={sS ? true : false}>
        <form style={{ width: '100%' }} onSubmit={handleClose1}>
          <center>
            <DialogTitle id="">Complete your registration</DialogTitle>
          </center>
          <DialogContent>
            <div
              className="complete-reg-signup"
              style={{ minHeight: '200px', minWidth: '400px' }}
            >
              <center>
                <p>Just a little more information from you</p>
              </center>

              <InputField
                label="Linkedin"
                type="text"
                id="linkedin"
                placeholder="Eg. https://www.linkedin.com/in/johndoe/"
                value={linkedin}
                change={updateHandler}
                name="linkedin"
                disabled={false}
                required={true}
              />
            </div>
          </DialogContent>
          <center>
            <button type="submit">Submit</button>
          </center>
        </form>
      </Dialog>
    </>
  );
}

export default Dashboard;

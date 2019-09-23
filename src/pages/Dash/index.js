import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
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
import axios from 'axios';

function Dashboard() {
  const [opener, setOpen] = useState(true);
  const [sideNavState, setSideNavState] = useState(false);
  const [signupUpdate, setSignupUpdate] = useState({
    skills: [],
    isMentor: false,
  });
  const token = readCookie('mentordev_token');
  const sS = readCookie('s_s');
  const socialSignUp = readCookie('social_signup');
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
    //update user info with signupUpdate
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

      axios({
        method: 'PUT',
        url: `${process.env.REACT_APP_BACKEND_URL}/user/signupUpdate`,
        headers,
        data: { ...signupUpdate }
      }).then(({data})=>{
        alert(JSON.stringify(data))
        eraseCookie('s_s');
        if (data.payload.isMentor) createCookie('validateType', data.payload.isMentor)
        setOpen(false);
      })
  }
  function updateHandler(e) {
    // e.preventDefault();
    setSignupUpdate({
      ...signupUpdate,
      [e.target.name]: e.target.value.split(', '),
    });
  }
  function updateHandlerT(e, value) {
    //e.preventDefault();
    setSignupUpdate({
      ...signupUpdate,
      [e.target.name]: value,
    });
  }
  const handleLogOut = event => {
    event.preventDefault();
    eraseCookie('mentordev_token');
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
          <span className="admin-sub-search-nav"></span>
        )}
        <UserMenu validateType={isMentor} />
        <button onClick={handleLogOut} className="generalLogOut2">
          <i className="mdi mdi-logout-variant"></i> Log out
        </button>
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
          <Route path="/dashboard/schedule" component={ScheduleList} />
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
            <UserDashHeading text="Your Contact List" icon="contacts" />
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
                label="Skills"
                type="text"
                id="skills"
                placeholder="Eg. Javascript, React, PHP..."
                value={signupUpdate.skills.join(', ')}
                change={updateHandler}
                name="skills"
                disabled={false}
                required={true}
              />
              <div id="inputField" className={'mentor'}>
                <p>{'Are you a mentor?'}</p>
                <span>
                  <span>Yes</span>
                  <input
                    className="mentor-slt-radio"
                    type={'radio'}
                    name={'isMentor'}
                    onChange={e => updateHandlerT(e, true)}
                    required
                    checked={signupUpdate.isMentor}
                  />
                  <span>No</span>
                  <input
                    className="mentor-slt-radio"
                    type={'radio'}
                    name={'isMentor'}
                    onChange={e => updateHandlerT(e, false)}
                    required
                    checked={!signupUpdate.isMentor}
                  />
                </span>
              </div>
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

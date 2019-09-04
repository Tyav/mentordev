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
import { readCookie, eraseCookie } from '../../helper/cookie';

  



function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const [sideNavState, setSideNavState] = useState(false);
  const token = readCookie('mentordev_token');
  const sS = readCookie('s_s')
  const socialSignUp = readCookie('social_signup')
  const isMentor = localStorage.getItem('validateType');

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
  function handleClose(e){
    e.preventDefault()
    sS? setOpen(true): setOpen(false);
    return open
  }
  function handleClose1(e){
    e.preventDefault();
    eraseCookie('s_s')
  }


  return (
    <>
      <nav className="new-dash-nav">
        <span className="new-dash-menu-toggler" onClick={sideNavHandler}>
          <div />
        </span>

        <a href="/" className="new-dash-nav-logo">
          Mentor <span>/>ev</span>
        </a>
        <UserSearch />
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
      <Dialog open={sS?true: false} >
        <center><DialogTitle id="">Complete {sS}</DialogTitle></center>
        <center><button onClick={handleClose1}>Close</button></center>
      </Dialog>    

    </>
  );
}

export default Dashboard;

import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
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

function Dashboard() {
  const [sideNavState, setSideNavState] = useState(false);
  const token = localStorage.getItem('token');

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
    return <Redirect to="/login" />
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
        <UserMenu />
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
          <Route path="/dashboard/mentor/requests/:requestId" component={ScheduleRequests} />
          <Route exact path="/dashboard/search" component={Search} />
        </div>
        <div className="new-dash-right">
          <UserScheduleList />
          <div className="new-dash-contact-list">
            <UserDashHeading text="Your Contact List" icon="contacts" />
            <UserContactList />
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;

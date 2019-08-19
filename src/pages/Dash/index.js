import React, { useState } from 'react';

import UserProfile from '../../components/UserProfile';
import UserSearch from '../../components/UserSearch';
import UserMenu from '../../components/UserMenu';
import UserDashHeading from '../../components/UserDashHeading';
import UserScheduleList from '../../components/UserSchedule';
import UserContactList from '../../components/UserContactList';
import UserConnects from '../../components/UserConnects';

function Dashboard() {
  const [sideNavState, setSideNavState] = useState(false);

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
          <UserDashHeading
            text="Your most recent Mentors"
            icon="checkbox-marked-circle-outline"
          />
          <UserConnects />
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

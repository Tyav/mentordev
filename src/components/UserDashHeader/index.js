import React from 'react';
import { NavLink } from 'react-router-dom';

//Helpers
import { eraseCookie, readCookie } from '../../helper/cookie';

function UserDashHeader() {
  const [toggle, setToggle] = React.useState(true);

  const isMentor = readCookie('validateType');

  const handleLogout = event => {
    event.preventDefault();
    eraseCookie('mentordev_token');
    eraseCookie('validateType');
  };

  function handleNavToggle(e) {
    e.preventDefault();
    setToggle(!toggle);

    const sideNav = document.querySelector('.user-dash-header-menu');
    const content = document.querySelector('.user-dash-content');

    if (!toggle) {
      sideNav.classList.add('show-mobile-nav');
      content.classList.add('expand-content');
    } else {
      sideNav.classList.remove('show-mobile-nav');
      content.classList.remove('expand-content');
    }
  }
  return (
    <nav className="user-dash-header">
      <div className="user-dash-header-head">
        <a href="/" className="user-new-dash-nav-logo">
          Mentor <span>/&gt;ev</span>
        </a>
        {/* <img alt="search" src="/assets/img/icons8-search.svg" /> */}
        <img
          alt="menu toggler"
          src="/assets/img/menu.svg"
          className="mobile-toggle"
          onClick={handleNavToggle}
        />
      </div>
      <div className="user-dash-header-menu">
        <ul className="user-admin-nav-menu-item">
          <h5>MAIN NAVIGATION</h5>
          <NavLink exact to="/dashboard">
            <li>
              <img src="/assets/img/dashboard.svg" alt="dashboard" />
              <span>Home</span>
            </li>
          </NavLink>
          <NavLink exact to="/dashboard/request">
            <li>
              <img src="/assets/img/approval.svg" alt="" />
              <span>Manage Requests</span>
            </li>
          </NavLink>

          {isMentor ? (
            <>
              <h5>SCHEDULES</h5>
              <NavLink exact to="/dashboard/schedule">
                <li>
                  <img src="/assets/img/punctuality.svg" alt="" />
                  <span>Manage Schedules</span>
                </li>
              </NavLink>
            </>
          ) : null}
          <h5>DEVELOPMENT PLANS</h5>
          <NavLink exact to="/dashboard/idp">
            <li>
              <img src="/assets/img/planning.svg" alt="" />
              <span>Development Plan</span>
            </li>
          </NavLink>
          <li>
            <img src="/assets/img/performance.svg" alt="" />
            <span>
              Mentees Report<sup className="beta">BETA</sup>
            </span>
          </li>

          <h5>Account Settings</h5>
          <NavLink exact to="/dashboard/profile">
            <li>
              <img src="/assets/img/building.svg" alt="" />
              <span>Edit Profile</span>
            </li>
          </NavLink>
          <NavLink exact to="/dashboard/profile/#update-password-area">
            <li>
              <img src="/assets/img/key.svg" alt="" />
              <span>Change Password</span>
            </li>
          </NavLink>
          <li>
            <button onClick={handleLogout} className="user-dash-logout-button">
              <i className="mdi mdi-power"></i> Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default UserDashHeader;

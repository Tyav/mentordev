import React from 'react';
import { NavLink } from 'react-router-dom';

//Helpers
import { eraseCookie } from '../../helper/cookie';

function UserDashHeader() {
  const handleLogout = event => {
    event.preventDefault();
    eraseCookie('mentordev_token');
    eraseCookie('validateType');
  };
  return (
    <nav className="user-dash-header">
      <div className="user-dash-header-head">
        <a href="/" className="user-new-dash-nav-logo">
          Mentor <span>/&gt;ev</span>
        </a>
        <img alt="search" src="/assets/img/icons8-search.svg" />
        <img alt="menu toggler" src="/assets/img/menu.svg" />
      </div>
      <div className="user-dash-header-menu">
        <ul className="user-admin-nav-menu-item">
          <h5>MAIN NAVIGATION</h5>
          <NavLink exact to="/dashboard">
            <li>
              <img src="/assets/img/dashboard.svg" />
              <span>Home</span>
            </li>
          </NavLink>
          <li>
            <img src="/assets/img/approval.svg" />
            <span>Manage Requests</span>
          </li>

          <h5>SCHEDULES</h5>
          <li>
            <img src="/assets/img/punctuality.svg" />
            <span>Manage Schedules</span>
          </li>

          <h5>DEVELOPMENT PLANS</h5>
          <li>
            <img src="/assets/img/performance.svg" />
            <span>Mentees Report</span>
          </li>

          <h5>Account Settings</h5>
          <NavLink exact to="/dashboard/profile">
            <li>
              <img src="/assets/img/building.svg" />
              <span>Edit Profile</span>
            </li>
          </NavLink>
          <li>
            <img src="/assets/img/key.svg" />
            <span>Change Password</span>
          </li>
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

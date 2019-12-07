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

          <h5>SCHEDULES</h5>
          <NavLink exact to="/dashboard/schedule">
            <li>
              <img src="/assets/img/punctuality.svg" alt="" />
              <span>Manage Schedules</span>
            </li>
          </NavLink>
          <h5>DEVELOPMENT PLANS</h5>
          <NavLink exact to="/dashboard/idp">
            <li>
              <img src="/assets/img/planning.svg" alt="" />
              <span>Mentees IDPs</span>
            </li>
          </NavLink>
          <li>
            <img src="/assets/img/performance.svg" alt="" />
            <span>Mentees Report</span>
          </li>

          <h5>Account Settings</h5>
          <NavLink exact to="/dashboard/profile">
            <li>
              <img src="/assets/img/building.svg" alt="" />
              <span>Edit Profile</span>
            </li>
          </NavLink>
          <li>
            <img src="/assets/img/key.svg" alt="" />
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

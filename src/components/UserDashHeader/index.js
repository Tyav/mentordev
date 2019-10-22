import React from 'react';

function UserDashHeader() {
  return (
    <nav className="user-dash-header">
      <div className="user-dash-header-head">
        <a href="/" class="user-new-dash-nav-logo">
          Mentor <span>/&gt;ev</span>
        </a>
        <img alt="search" src="/assets/img/icons8-search.svg" />
        <img alt="menu toggler" src="/assets/img/menu.svg" />
      </div>
      <div className="user-dash-header-menu">
        <ul className="user-admin-nav-menu-item">
          <h5>MAIN NAVIGATION</h5>
          <li>
            <img src="/assets/img/dashboard.svg" />
            <span>Home</span>
          </li>
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
          <li>
            <img src="/assets/img/building.svg" />
            <span>Edit Profile</span>
          </li>
          <li>
            <img src="/assets/img/key.svg" />
            <span>Change Password</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default UserDashHeader;

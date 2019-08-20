import React from 'react';
import { NavLink } from 'react-router-dom';

function UserMenu() {
  return (
    <ul className="new-dash-menu">
      <NavLink exact to="/dashboard" activeClassName="new-dash-menu-active">
        <li>Dashboard</li>
      </NavLink>
      <NavLink to="/dashboard/schedule" activeClassName="new-dash-menu-active">
        <li>Manage Schedule</li>
      </NavLink>
      <NavLink to="/dashboard/request" activeClassName="new-dash-menu-active">
        <li>Manage Requests</li>
      </NavLink>
      <NavLink
        exact
        to="/dashboard/profile"
        activeClassName="new-dash-menu-active"
      >
        <li>Profile Settings</li>
      </NavLink>
    </ul>
  );
}

export default UserMenu;

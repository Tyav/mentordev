import React from 'react';
import { NavLink } from 'react-router-dom';

function UserMenu() {
  return (
    <ul className="new-dash-menu">
      <NavLink to="/dashboard" activeClassName="new-dash-menu-active">
        <li>Dashboard</li>
      </NavLink>
      <NavLink to="/dashboard/schedule" activeClassName="new-dash-menu-active">
        <li>Manage Schedule</li>
      </NavLink>
      <NavLink to="/dashboard/contact" activeClassName="new-dash-menu-active">
        <li>Manage Contacts</li>
      </NavLink>
      <NavLink to="/dashboard/profile" activeClassName="new-dash-menu-active">
        <li>Profile Settings</li>
      </NavLink>
    </ul>
  );
}

export default UserMenu;

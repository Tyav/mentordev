import React from 'react';
import { Link } from 'react-router-dom';

function UserMenu() {
  return (
    <ul className="new-dash-menu">
      <Link to="/dashboard">
        <li>Dashboard</li>
      </Link>
      <Link to="/dashboard">
        <li>Manage Schedule</li>
      </Link>
      <Link to="/dashboard">
        <li>Manage Contacts</li>
      </Link>
      <Link to="/dashboard/profile">
        <li>Profile Settings</li>
      </Link>
    </ul>
  );
}

export default UserMenu;

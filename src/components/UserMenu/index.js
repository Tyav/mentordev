import React from 'react';
import { NavLink } from 'react-router-dom';

function UserMenu({ validateType }) {
  return (
    <ul className="new-dash-menu">
      <NavLink exact to="/dashboard" activeClassName="new-dash-menu-active">
        <li>
          <i className="mdi mdi-view-dashboard" /> Dashboard
        </li>
      </NavLink>
      {validateType ? (
        <NavLink
          exact
          to="/dashboard/schedule"
          activeClassName="new-dash-menu-active"
        >
          <li>
            <i className="mdi mdi-clock" /> Manage Schedule
          </li>
        </NavLink>
      ) : (
        <NavLink
          exact
          to="/dashboard/request"
          activeClassName="new-dash-menu-active"
        >
          <li>
            <i className="mdi mdi-bell" /> Manage Requests
          </li>
        </NavLink>
      )}
      <NavLink
        exact
        to="/dashboard/profile"
        activeClassName="new-dash-menu-active"
      >
        <li>
          <i className="mdi mdi-wrench" /> Profile Settings
        </li>
      </NavLink>
    </ul>
  );
}

export default UserMenu;

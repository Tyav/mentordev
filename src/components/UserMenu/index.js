import React from 'react';
import { NavLink } from 'react-router-dom';
import { eraseCookie } from '../../helper/cookie';

function UserMenu({ validateType }) {
  const handleLogOut = event => {
    event.preventDefault();
    eraseCookie('mentordev_token');
    eraseCookie('validateType');
  };

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
          to="/dashboard/time-slot"
          activeClassName="new-dash-menu-active"
        >
          <li>
            <i className="mdi mdi-clock" /> Manage Time Slots
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
      <button onClick={handleLogOut} className="generalLogOut">
        <i className="mdi mdi-logout-variant"></i> Log out
      </button>
    </ul>
  );
}

export default UserMenu;

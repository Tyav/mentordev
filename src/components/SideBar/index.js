import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <Link className="menu-item" to="/dashboard">
        HOME
      </Link>

      <Link className="menu-item" to="/dashboard">
        DASHBOARD
      </Link>

      <Link className="menu-item" to="/dashboard/profile">
        PROFILE
      </Link>

      <Link className="menu-item" to="/dashboard/requests">
        REQUEST
      </Link>
    </Menu>
  );
};

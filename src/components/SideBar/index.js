import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        HOME
      </a>

      <a className="menu-item" href="/">
        DASHBOARD
      </a>

      <a className="menu-item" href="/">
        PROFILE
      </a>

      <a className="menu-item" href="/">
        REQUEST
      </a>
    </Menu>
  );
};

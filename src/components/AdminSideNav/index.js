import React from 'react';
import { Link } from 'react-router-dom';
import { eraseCookie } from '../../helper/cookie'
function AdminSideNav() {
  const handleLogout = () => {
    eraseCookie('mlt');
  }
  return (
    <ul className="admin-nav-menu-item">
      <Link to="/admin">
        <li>
          <i className="mdi mdi-view-dashboard" />
          <span>
            Dashboard <sup className="beta">BETA</sup>
          </span>
        </li>
      </Link>
      <Link to="/admin/users">
        <li>
          <i className="mdi mdi-account-group" />
          <span>Manage Users</span>
        </li>
      </Link>
      <Link to="/admin/analytics">
        <li>
          <i className="mdi mdi-chart-timeline-variant" />
          <span>
            Analytics <sup className="beta">BETA</sup>
          </span>
        </li>
      </Link>
      <Link to="/admin/settings">
        <li>
          <i className="mdi mdi-wrench" />
          <span>
            Settings <sup className="beta">BETA</sup>
          </span>
        </li>
      </Link>
      <Link to="/adminlogin" onClick={handleLogout}>
        <li>
          <i className="mdi mdi-logout" />
          <span>
            Logout
          </span>
        </li>
      </Link>
    </ul>
  );
}

export default AdminSideNav;

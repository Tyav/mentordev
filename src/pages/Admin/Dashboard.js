import React, { useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import { Route, Redirect } from 'react-router-dom';

import Users from './Users';
import AdminSideNav from '../../components/AdminSideNav';
import { readCookie } from '../../helper/cookie'

import Login from './login';
import AnalyticsSummary from './AnalyticsSummary';
import Analytics from './Analytics';
import Settings from './Settings';

import './css/main.css';

function Dashboard() {
  const [showToggle, setShowToggle] = useState(false);
  // get admin token from cookie
  const token = readCookie('mlt');
  if (!token) {
    return <Redirect to="/adminlogin" />;
  }

  const handleNavToggle = e => {
    e.preventDefault();
    setShowToggle(!showToggle);
    const sideNav = document.querySelector('#admin-side-nav');
    const sideNavIcon = document.querySelector('#admin-side-nav i');
    const mainContent = document.querySelector('#admin-main-page');
    const mobileNav = document.querySelector('.admin-side-nav-menu');
    const navLogo = document.querySelector('.admin-nav-logo');
    const menuItem = document.querySelectorAll('.admin-nav-menu-item li span');
    if (!showToggle) {
      sideNav.classList.add('admin-shrink-nav');
      mainContent.classList.add('admin-shrink-main');
      sideNavIcon.classList.remove('mdi-menu-open');
      sideNavIcon.classList.add('mdi-forwardburger');
      mobileNav.classList.add('admin-show-menu');
      navLogo.classList.add('hide');
      menuItem.forEach(item => item.classList.add('hide'));
      return;
    }
    sideNav.classList.remove('admin-shrink-nav');
    mainContent.classList.remove('admin-shrink-main');
    sideNavIcon.classList.add('mdi-menu-open');
    sideNavIcon.classList.remove('mdi-forwardburger');
    mobileNav.classList.remove('admin-show-menu');
    setTimeout(() => {
      navLogo.classList.remove('hide');
      menuItem.forEach(item => item.classList.remove('hide'));
    }, 100);
  };

  return (
    <div id="admin-dash-content">
      <nav id="admin-side-nav">
        <div className="admin-side-nav-header">
          <div className="admin-nav-logo">
            Mentor <span>/>ev</span>
          </div>
          <i className="mdi mdi-menu-open" onClick={handleNavToggle} />
        </div>
        <div className="admin-side-nav-menu">
          <AdminSideNav></AdminSideNav>
        </div>
      </nav>
      <Route exact path="/admin" component={AnalyticsSummary}></Route>
      <Route exact path="/admin/users" component={Users}></Route>
      <Route exact path="/admin/analytics" component={Analytics}></Route>
      <Route exact path="/admin/settings" component={Settings}></Route>
    </div>
  );
}

export default Dashboard;

import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Table from '../../components/Table/table';
import MentorshipTable from '../../components/MentorshipTable';
import './css/main.css';

function Dashboard() {
  const [showToggle, setShowToggle] = useState(false);

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
          <ul className="admin-nav-menu-item">
            <li>
              <i className="mdi mdi-view-dashboard" />
              <span>
                Dashboard <sup className="beta">BETA</sup>
              </span>
            </li>
            <li>
              <i className="mdi mdi-account-group" />
              <span>Manage Users</span>
            </li>
            <li>
              <i className="mdi mdi-chart-timeline-variant" />
              <span>
                Analytics <sup className="beta">BETA</sup>
              </span>
            </li>
            <li>
              <i className="mdi mdi-wrench" />
              <span>
                Settings <sup className="beta">BETA</sup>
              </span>
            </li>
          </ul>
        </div>
      </nav>
      <main id="admin-main-page">
        <header className="admin-nav-header" />
        <nav className="admin-main-title">
          <p>Admin Dashboard</p>

          <div className="admin-dash-tabs">
            <Tabs defaultIndex={0}>
              <div className="tab">
                <TabList>
                  <Tab>Users</Tab>
                  <Tab>Requests</Tab>
                  <Tab>Mentorships</Tab>
                  <Tab>Schedules</Tab>
                </TabList>
              </div>

              <TabPanel>
                <Tabs forceRenderTabPanel>
                  <TabList>
                    <Tab>All Users</Tab>
                    <Tab>Mentors</Tab>
                    <Tab>Mentees</Tab>
                    <Tab>Admins</Tab>
                  </TabList>
                  <TabPanel>
                    <Table />
                  </TabPanel>
                  <TabPanel>
                    <p>Manage all Mentors</p>
                  </TabPanel>
                  <TabPanel>
                    <p>Manage all Mentees</p>
                  </TabPanel>
                  <TabPanel>
                    <p>Mange all registered admin</p>
                  </TabPanel>
                </Tabs>
              </TabPanel>
              <TabPanel>
                <p>Requests</p>
              </TabPanel>
              <TabPanel>
                <Tabs forceRenderTabPanel>
                  <TabList>
                    <Tab>Completed</Tab>
                    <Tab>Active</Tab>
                  </TabList>
                  <TabPanel>
                    <MentorshipTable />
                  </TabPanel>
                  <TabPanel>
                    <MentorshipTable />
                  </TabPanel>
                </Tabs>
              </TabPanel>
              <TabPanel>Schedules</TabPanel>
            </Tabs>
          </div>
        </nav>
      </main>
    </div>
  );
}

export default Dashboard;

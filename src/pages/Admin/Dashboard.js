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
    if (!showToggle) {
      sideNav.classList.add('admin-shrink-nav');
      mainContent.classList.add('admin-shrink-main');
      sideNavIcon.classList.remove('mdi-menu-open');
      sideNavIcon.classList.add('mdi-forwardburger');
      mobileNav.classList.add('admin-show-menu');
      navLogo.classList.add('hide');
      return;
    }
    sideNav.classList.remove('admin-shrink-nav');
    mainContent.classList.remove('admin-shrink-main');
    sideNavIcon.classList.add('mdi-menu-open');
    sideNavIcon.classList.remove('mdi-forwardburger');
    mobileNav.classList.remove('admin-show-menu');
    setTimeout(() => {
      navLogo.classList.remove('hide');
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
              <span>Dashboard</span>
            </li>
          </ul>
        </div>
      </nav>
      <main id="admin-main-page">
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
                    <p>Wife of Homer; mother of Bart, Lisa, and Maggie.</p>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Marge_Simpson.png/220px-Marge_Simpson.png"
                      alt="Marge Simpson"
                    />
                  </TabPanel>
                  <TabPanel>
                    <p>
                      Oldest child and only son of Homer and Marge; brother of
                      Lisa and Maggie.
                    </p>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
                      alt="Bart Simpson"
                    />
                  </TabPanel>
                  <TabPanel>
                    <p>
                      Middle child and eldest daughter of Homer and Marge;
                      sister of Bart and Maggie.
                    </p>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/200px-Lisa_Simpson.png"
                      alt="Lisa Simpson"
                    />
                  </TabPanel>
                  <TabPanel>
                    <p>
                      Youngest child and daughter of Homer and Marge; sister of
                      Bart and Lisa.
                    </p>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/223px-Maggie_Simpson.png"
                      alt="Maggie Simpson"
                    />
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

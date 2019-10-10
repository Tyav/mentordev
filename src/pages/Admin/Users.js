import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import AdminPageTitle from '../../components/AdminPageTitle';
import Table from '../../components/Table/table';
import MentorshipTable from '../../components/MentorshipTable';
import { readCookie} from '../../helper/cookie'

function Users() {
  return (
    <main id="admin-main-page">
      <header className="admin-nav-header" />
      <AdminPageTitle title="Manage Users"></AdminPageTitle>
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
                <Tab>Active Users</Tab>
                <Tab>Mentors</Tab>
                <Tab>Mentees</Tab>
                <Tab>Admins</Tab>
                <Tab>Inactive Users</Tab>
              </TabList>
              <TabPanel>
                <div className="admin-user-display">
                  <Table role={"active"}/>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="admin-user-display">
                  <Table role={"mentor"}/>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="admin-user-display">
                  <Table role={"mentee"}/>
                </div>
              </TabPanel>
              <TabPanel>
              <div className="admin-user-display">
                  <Table role={"admin"}/>
                </div>
              </TabPanel>
              <TabPanel>
              <div className="admin-user-display">
                  <Table role={"inactive"}/>
                </div>
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
                <MentorshipTable complete={true}/>
              </TabPanel>
              <TabPanel>
                <MentorshipTable complete={false}/>
              </TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel>Schedules</TabPanel>
        </Tabs>
      </div>
    </main>
  );
}
export default Users;

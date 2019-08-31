import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Table from '../Table/table';

function AdminUserList() {
  return (
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
              <div className="admin-user-display">
                <Table />
              </div>
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
  );
}

export default AdminUserList;

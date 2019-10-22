import React from 'react';
import { Link, Route } from 'react-router-dom';

//components
import UserDashHeader from '../../components/UserDashHeader';
import UserDashContentHeader from '../../components/UserDashContentHeader';
import UserDashContactList from '../../components/UserDashContactList';
import MentorRequest from '../MentorRequest';
import DevelopmentPlan from '../UserIdp';

//Styling
import './UserDashboard.css';

function UserDashboard() {
  return (
    <>
      <div className="user-dash-body">
        <UserDashHeader />
        <main className="user-dash-content">
          <UserDashContentHeader />
          <div className="user-dash-content-display">
            <UserDashContactList />
            <div className="user-dash-content-content">
              <Route exact path="/dash" component={MentorRequest}></Route>
              <Route exact path="/dash/idp" component={DevelopmentPlan}></Route>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default UserDashboard;

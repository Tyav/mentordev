import React, { useState, useEffect, Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';

//Helpers
import getParams from '../../helper/getParams';

//Context
import { DashContext } from '../../Context';

//ErrorBoundary
import ErrorBoundary from '../../ErrorBoundary';

//components
import UserDashHeader from '../../components/UserDashHeader';
import UserDashContentHeader from '../../components/UserDashContentHeader';
import UserDashContactList from '../../components/UserDashContactList';

//Styling
import './UserDashboard.css';
import { createCookie, readCookie } from '../../helper/cookie';
import { sendGetRequest } from '../../actions';
import { formatLocalUser } from '../../helper/formatUpdateData';
import Loading from '../../components/Loading';

const UserDashHome = React.lazy(() => import('../UserDashHome'));
const MentorRequest = React.lazy(() => import('../MentorRequest'));
const DevelopmentPlan = React.lazy(() => import('../UserIdp'));
const ProfileUpdate = React.lazy(() => import('../UserDashUpdate'));
const UserScheduleList = React.lazy(() => import('../UserScheduleList'));
const UserDashRequest = React.lazy(() => import('../UserDashRequest'));

function UserDashboard() {
  const mentor = getParams('auth');
  if (mentor === 'true') createCookie('validateType', true);
  if (getParams('token')) createCookie('mentordev_token', getParams('token'));
  const [toggleState, setToggleState] = useState(false);
  const token = readCookie('mentordev_token');
  const { setUser } = React.useContext(DashContext);

  useEffect(() => {
    fetchUser();
  }, [token]);

  const fetchUser = () => {
    return sendGetRequest('/user/me')
      .then(response => {
        if (response.data.statusCode === 200) {
          const userValue = formatLocalUser(response.data.payload);
          return userValue;
        }
      })
      .catch(error => {});
  };

  useEffect(() => {
    fetchUser();
    async function fetchContact() {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/contact`,
          config,
        );
        const userDetails = await fetchUser();
        setUser({ ...userDetails, contacts: response.data.payload });
      } catch (error) {}
    }
    fetchContact();
  }, [token]);

  const ContactListToggleHandler = e => {
    e.preventDefault();
    const contactList = document.querySelector('.user-dash-contact-list');
    setToggleState(!toggleState);
    if (toggleState) {
      contactList.classList.remove('show-contact-list');
    } else {
      contactList.classList.add('show-contact-list');
      contactList.style.transition = 0.2;
    }
  };

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <div className="user-dash-body">
        <UserDashHeader />
        <main className="user-dash-content">
          <UserDashContentHeader onclick={ContactListToggleHandler} />
          <div className="user-dash-content-display">
            <UserDashContactList />
            <div className="user-dash-content-content">
              <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                  <Route
                    exact
                    path="/dashboard"
                    component={UserDashHome}
                  ></Route>
                  <Route
                    exact
                    path="/dashboard/newrequest"
                    component={MentorRequest}
                  ></Route>
                  <Route
                    exact
                    path="/dashboard/idp"
                    component={DevelopmentPlan}
                  ></Route>
                  <Route
                    exact
                    path="/dashboard/idp/:idpId"
                    component={DevelopmentPlan}
                  ></Route>
                  <Route
                    exact
                    path="/dashboard/profile"
                    component={ProfileUpdate}
                  ></Route>
                  <Route
                    exact
                    path="/dashboard/schedule"
                    component={UserScheduleList}
                  ></Route>
                  <Route
                    exact
                    path="/dashboard/request"
                    component={UserDashRequest}
                  ></Route>
                </Suspense>
              </ErrorBoundary>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default UserDashboard;

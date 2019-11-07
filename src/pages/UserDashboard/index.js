import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';

//Helpers
import getParams from '../../helper/getParams';

import { DashContext } from '../../Context';

//components
import UserDashHeader from '../../components/UserDashHeader';
import UserDashContentHeader from '../../components/UserDashContentHeader';
import UserDashContactList from '../../components/UserDashContactList';
import MentorRequest from '../MentorRequest';
import DevelopmentPlan from '../UserIdp';

//Styling
import './UserDashboard.css';
import ProfileUpdate from '../UserDashUpdate';
import { createCookie, readCookie } from '../../helper/cookie';
import UserDashHome from '../UserDashHome';
import { sendGetRequest } from '../../actions';
import { formatLocalUser } from '../../helper/formatUpdateData';
import UserScheduleList from '../UserScheduleList';
import UserDashRequest from '../UserDashRequest';

function UserDashboard() {
  const mentor = getParams('auth');
  if (mentor === 'true') createCookie('validateType', true);
  if (getParams('token')) createCookie('mentordev_token', getParams('token'));
  const [toggleState, setToggleState] = useState(false);
  const token = readCookie('mentordev_token');
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchUser();
  }, [token]);

  const fetchUser = () => {
    return sendGetRequest('/user/me')
      .then(response => {
        if (response.data.statusCode === 200) {
          const userValue = formatLocalUser(response.data.payload);
          // setUser({ ...user, ...userValue });
          return userValue;
        }
      })
      .catch(error => {
        console.log(error);
      });
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
      } catch (error) {
        console.log(error.message);
      }
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
              <DashContext.Provider value={{ user, setUser }}>
                <Route exact path="/dashboard" component={UserDashHome}></Route>
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
              </DashContext.Provider>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default UserDashboard;

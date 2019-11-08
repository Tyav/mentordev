import React, { useState, useEffect, useContext } from 'react';
import UserDashSingleCard from '../../components/UserDashSingleCard';

import axios from 'axios';

import { readCookie } from '../../helper/cookie';

import { DashContext } from '../../Context';

import './UserDashHome.css';
import DashHomeList from '../../components/DashHomeList';
import UserDashIntro from '../../components/UserDashIntro';
import MentorRequest from '../MentorRequest';

import { sendGetRequest } from '../../actions';
import { formatLocalUser } from '../../helper/formatUpdateData';

function UserDashHome() {
  const isMentor = readCookie('validateType');
  const token = readCookie('mentordev_token');
  const [latestConnect, setLatestConnect] = useState([]);
  const [userIdp, setUserIdp] = useState([]);
  const { user, setUser } = useContext(DashContext);

  const fetchUser = () => {
    return sendGetRequest('/user/me')
      .then(response => {
        if (response.data.statusCode === 200) {
          const userValue = formatLocalUser(response.data.payload);
          setUser(userValue);
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
        setLatestConnect([...response.data.payload]);
      } catch (error) {
        console.log(error.message);
      }
    }
    const fetchUserIdp = async () => {
      let response = await sendGetRequest('/idp');
      setUserIdp(response.data.payload);
    };
    fetchContact();
    fetchUserIdp();
  }, [token]);

  useEffect(() => {
    setUser({ ...user, connects: latestConnect, idps: userIdp });
  }, [latestConnect, userIdp]);

  return (
    <>
      {latestConnect.length ? (
        <>
          {latestConnect.map(connection => {
            let contact = connection.contact;
            return (
              <UserDashSingleCard
                profileImage={contact.avatar}
                coverImage={contact.avatar}
                username={contact.name}
                email={contact.email}
                stacks={contact.skills}
                schedule={connection.schedule}
              />
            );
          })}
          <DashHomeList />
        </>
      ) : (
        <>
          <UserDashIntro username={user.fullname} />
          {isMentor ? <MentorRequest /> : <DashHomeList />}
        </>
      )}
    </>
  );
}

export default UserDashHome;

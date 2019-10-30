import React, { useState, useEffect, useContext } from 'react';
import UserDashSingleCard from '../../components/UserDashSingleCard';

import axios from 'axios';

import { readCookie } from '../../helper/cookie';

import { DashContext } from '../../Context';

import './UserDashHome.css';
import DashHomeList from '../../components/DashHomeList';
import UserDashIntro from '../../components/UserDashIntro';
import MentorRequest from '../MentorRequest';

function UserDashHome() {
  const isMentor = readCookie('validateType');
  const token = readCookie('mentordev_token');
  const [latestConnect, setLatestConnect] = useState([]);
  const { user, setUser } = useContext(DashContext);

  useEffect(() => {
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
    fetchContact();
  }, [token]);
  return (
    <>
      {latestConnect.length ? (
        <UserDashSingleCard />
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

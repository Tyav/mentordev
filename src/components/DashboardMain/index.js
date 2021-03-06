import React, { useEffect, useState } from 'react';
import axios from 'axios';

import externalStyles from '../MainComponent/MainComponent.module.css';
import styles from './DashboardMain.module.css';
import MainComponent from '../MainComponent';
import ProfileHeader from '../ProfileHeader';
import MyMentors from '../MyMentors';
import SearchBar from '../SearchBar';

const DashboardMain = () => {
  const token = window.localStorage.getItem('token');
  const [mentors, setMentors] = useState([]);
  useEffect(() => {
    getMentors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };

  const getMentors = () => {
    return axios({
      method: 'GET',
      url: `${process.env.REACT_APP_BACKEND_URL}/user`,
      headers
    })
      .then(response => {
        setMentors(response.data.payload);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <MainComponent>
      <div className={externalStyles.search_container}>
        <SearchBar />
      </div>
      <div className={externalStyles.profile_container}>
        <ProfileHeader />
      </div>
      <div className={externalStyles.mentors_container}>
        <h3 className={styles.mentors_heading}>Your Mentors</h3>
        <div>
          <MyMentors mentors={mentors} />
        </div>
      </div>
    </MainComponent>
  );
};

export default DashboardMain;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styles from '../MainComponent/MainComponent.module.css';
import MentorsProfileCard from '../MentorsProfileCard';
import MyMentors from '../MyMentors';
import MainComponent from '../MainComponent';
import ProfileHeader from '../ProfileHeader';
import SearchBar from '../SearchBar';

const DashboardMain = () => {
  const [mentors, setMentors] = useState([]);
  useEffect(() => {
    getMentors();
  }, []);

  function getMentors() {
    axios
      .get('http://localhost:6060/api/v1/user')
      .then(response => {
        setMentors(response.data.payload);
      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <MainComponent>
      <div className={styles.search_container}>
        <SearchBar />
      </div>
      <div className={styles.profile_container}>
        <ProfileHeader />
      </div>
      <div className={styles.mentors_container}>
        <h3 style={{ marginTop: '10px' }}>Your Mentors</h3>
        {/* <MentorsProfileCard mentors={mentors} /> */}
        <MyMentors mentors={mentors} />
      </div>
    </MainComponent>
  );
};

export default DashboardMain;

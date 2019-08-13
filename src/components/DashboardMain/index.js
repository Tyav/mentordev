import React, { useEffect, useState } from 'react';
import axios from 'axios';

import MentorsProfileCard from '../MentorsProfileCard';
import styles from './DashboardMain.module.css';
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
    <div className={styles.outer_container}>
      <div className={styles.container}>
        <div className={styles.search_container}>
          <SearchBar />
        </div>
        <div className={styles.profile_container}>
          <ProfileHeader />
        </div>
        <div className={styles.mentors_container}>
          <h3 style={{ marginTop: '10px' }}>Your Mentors</h3>
          <MentorsProfileCard mentors={mentors} />
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;

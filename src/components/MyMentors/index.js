import React from 'react';

import styles from './MyMentors.module.css';
import profile_avatar from '../../assets/images/profile_two.png';

const MyMentors = ({ mentors }) => {
  return (
    <>
      {mentors.map((mentor, key) => (
        <a href="/" rel="noopener noreferrer" className={styles.user_icon}>
          <img src={profile_avatar} alt="user avatar" className={styles.profile_avatar} />
        </a>
      ))}
    </>
  );
};

export default MyMentors;

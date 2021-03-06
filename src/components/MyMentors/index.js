import React from 'react';

import styles from './MyMentors.module.css';
import Tag from '../Tag';
const avatarSource = '/assets/img/profile_three.jpg';

const MyMentors = ({ mentors }) => {
  return (
    <>
      {mentors.map((mentor, key) => (
        <div className={styles.container} key={key}>
          <div className={styles.image}>
            <a href="/" rel="noopener noreferrer" className={styles.mentor_image}>
              <img src={avatarSource} alt="mentor avatar" className={styles.mentor_avatar} />
            </a>
          </div>
          <div className={styles.content}>
            <div className={styles.details}>
              <h3 className={styles.name}>Omolayo Victor</h3>
              <p className={styles.bio}>
                <strong>Schedule</strong> Day: Tuesday Time: 13:00
              </p>
              <div className={styles.group_element}>
                <p className={styles.email}>omolayovictor@gahoo.com</p>
                <div className={styles.location_div}>
                  <span className={styles.location}>Lagos, Nigeria</span>
                </div>
              </div>
              <div className={styles.skills}>
                <Tag tagname="JavaScript" />
                <Tag tagname="PHP" />
                <Tag tagname="Go" />
                <Tag tagname="React" />
              </div>
            </div>
            <div className={styles.social_buttons}>
              <div className={styles.social_group}>
                <div className={styles.links}>
                  <a href="/" rel="noopener noreferrer" className={styles.link}>
                    <i className="fab fa-twitter-square" />
                  </a>
                  <a href="/" rel="noopener noreferrer" className={styles.link}>
                    <i className="fab fa-facebook-square" />
                  </a>
                  <a href="/" rel="noopener noreferrer" className={styles.link}>
                    <i className="fab fa-linkedin" />
                  </a>
                </div>
                <a href="/" rel="noopener noreferrer" className={styles.social}>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MyMentors;

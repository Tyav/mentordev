import React from 'react';
import styles from './DashboardHeader.module.css';
import profile_avatar from '../../assets/images/profile_two.png';

const DashboardHeader = () => {
  return (
    <div className={styles.container}>
      <nav className={`${styles.navHeader}`}>
        <ul className={styles.header}>
          <li className={styles.headerTitle}>
            <h2>DASHBOARD</h2>
            <p className={styles.welcome}>Welcome, Rukee Victor</p>
          </li>
          <li className={styles.otherNav}>
            <p>
              <a href="/" rel="noopener noreferrer" className={styles.bell_icon}>
                <i className="far fa-bell" />
              </a>
            </p>
            <p>
              <a href="/" rel="noopener noreferrer" className={styles.user_icon}>
                <img src={profile_avatar} alt="user avatar" className={styles.profile_avatar} />
              </a>
            </p>
            <p
              style={{ fontStyle: 'italic', fontSize: '1rem', paddingTop: '1.5rem' }}
              className={styles.just_name}
            >
              Rukee, Victor
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardHeader;

import React from 'react';

import styles from './DashboardHeader.module.css';
const profile_avatar = '/assets/img/profile_three.jpg';

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
            <p className={styles.bell}>
              <a
                href="/"
                rel="noopener noreferrer"
                className={styles.bell_icon}
              >
                <i className={`far fa-bell ${styles.bell_icon}`} />
              </a>
            </p>
            <div className={styles.toggle}>
              <p>
                <div className={styles.user_icon}>
                  <img
                    src={profile_avatar}
                    alt="user avatar"
                    className={styles.profile_avatar}
                  />
                </div>
              </p>
              <div className={styles.drop_down}>
                <i className={`fas fa-caret-down ${styles.drop_down_icon}`} />
              </div>
              {/* <DropDownDiv /> */}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardHeader;

import React from 'react';
import styles from './DashboardAside.module.css';
import { NavLink } from 'react-router-dom';

const DashboardAside = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div className={styles.logo}>
            <img src="/assets/img/logo.png" alt="logo" /> <br />
            DEV<span className={styles.logo_mentor}>MENTOR</span>
          </div>
          <div className={styles.navigation}>
            <NavLink
              exact
              to="/dashboard"
              className={`${styles.link}`}
              activeClassName={styles.activeNav}
            >
              DashBoard
            </NavLink>
            <NavLink
              exact
              to="/dashboard/profile"
              className={styles.link}
              activeClassName={styles.activeNav}
            >
              Profile
            </NavLink>
            <NavLink
              exact
              to="/dashboard/requests"
              className={styles.link}
              activeClassName={styles.activeNav}
            >
              Requests
            </NavLink>
          </div>
          <div className={styles.log_out}>
            <a href="/" rel="noopener noreferrer" className={styles.user_icon}>
              <div className={styles.go_out_icon}>
                <i className="fas fa-sign-out-alt" />
              </div>
              <span>Go Out</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAside;

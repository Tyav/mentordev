import React from 'react';
import styles from './DashboardAside.module.css';

const DashboardAside = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div className={styles.logo}>
            DEV<span className={styles.logo_mentor}>MENTOR</span>
          </div>
          <div className={styles.navigation}>
            <div className={`${styles.link} ${styles.profile}`}>DashBoard</div>
            <div className={styles.link}>Profile</div>
            <div className={styles.link}>Requests</div>
          </div>
          <div className={styles.log_out}>
            <a href="/" rel="noopener noreferrer" className={styles.user_icon}>
              <div className={styles.go_out_icon}>
                <i class="fas fa-sign-out-alt" />
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
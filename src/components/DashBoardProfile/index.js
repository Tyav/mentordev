import React from 'react';

import EditProfile from '../EditProfile';
import external_styles from '../DashboardMain/DashboardMain.module.css';
import styles from './DashboardProfile.module.css';

const Profile = () => {
  return (
    <div className={`${external_styles.outer_container} ${styles.top}`}>
      <div className={`${external_styles.container}`}>
        <div>
          <h4 className={styles.formTitle}>Edit Profile</h4>
          <div>
            <EditProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

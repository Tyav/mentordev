import React, { useState } from 'react';

import EditProfile from '../EditProfile';
import external_styles from '../DashboardMain/DashboardMain.module.css';
import styles from './DashboardProfile.module.css';
import Toggle from '../Toggle';

const Profile = () => {
  const [edit, setEdit] = useState(true);

  const handleEdit = () => setEdit(() => !edit);

  return (
    <div className={`${external_styles.outer_container} ${styles.top}`}>
      <div className={`${external_styles.container}`}>
        <div>
          <div className={styles.form_header}>
            <h4 className={styles.formTitle}>My Profile</h4>
            <div className={styles.button}>
              <Toggle handleClick={handleEdit} />
            </div>
          </div>
          <div>
            <EditProfile edit={edit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

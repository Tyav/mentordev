import React, { useState } from 'react';

import EditProfile from '../EditProfile';
import external_styles from '../DashboardMain/DashboardMain.module.css';
import styles from './DashboardProfile.module.css';

const Profile = () => {
  const [edit, setEdit] = useState(true);

  const handleEdit = () => {
    setEdit(() => !edit);
  };
  const handleColor = () => (edit ? { color: '' } : { color: '#38bc8a' });

  return (
    <div className={`${external_styles.outer_container} ${styles.top}`}>
      <div className={`${external_styles.container}`}>
        <div>
          <div className={styles.form_header}>
            <h4 className={styles.formTitle}>My Profile</h4>
            <div className={styles.button} onClick={handleEdit} style={handleColor()}>
              <i className={`fas fa-edit ${styles.icon}`} />
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

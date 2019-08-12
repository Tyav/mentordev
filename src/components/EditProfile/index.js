import React from 'react';

import InputField from '../../components/InputField';
import styles from './EditProfile.module.css';
import Button from '../../components/Button';

const EditProfile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <form>
          <InputField
            label="Fullname"
            type="text"
            id="fullname"
            placeholder="Eg. John Doe"
            value=""
          />
          <InputField
            label="Email"
            type="email"
            id="email"
            placeholder="Eg. xyz@abc.com"
            value=""
          />
          <InputField label="Password" type="password" id="password" placeholder="" value="" />
          <Button className="btn-success-solid register" text="Register" />
        </form>
      </div>
    </div>
  );
};

export default EditProfile;

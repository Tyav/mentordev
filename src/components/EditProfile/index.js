import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { formatBeforeUpdate, formatLocalUser } from '../../helper/formatUpdateData';
import styles from './EditProfile.module.css';
import InputField from '../InputField';
import '../InputField/InputField.css';
import Fieldset from '../FieldSet';
import Button from '../Button';
import { UserObject } from '../../Context';

const EditProfile = () => {
  const { user, setUser } = useContext(UserObject);
  console.log('user from before', user);
  let localUser = window.localStorage.getItem('user');
  localUser = JSON.parse(localUser);
  setUser(() => formatLocalUser(localUser));

 

  console.log('user from profile', user);
  const [values, setValues] = useState({
    ...user,
    errors: {
      fullname: '',
      email: ''
    }
  });

  console.log('values from profile', values);

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = formatBeforeUpdate(values);
    alert(JSON.stringify(data, null, 2));
  };

  const handleBlur = event => {
    const { name, value } = event.target;
    if (!value)
      return setValues({ ...values, errors: { ...values.errors, [name]: `${name} is required` } });

    const emailRegexp = /\S+@\S+\.\S+/;
    if (name === 'email' && emailRegexp.test(value) === false)
      return setValues({
        ...values,
        errors: { ...values.errors, [name]: `${name} is not valid.` }
      });

    return setValues({ ...values, errors: { ...values.errors, [name]: '' } });
  };

  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.input_container}>
            <div className={styles.input_group}>
              <div className={styles.validate_input}>
                <InputField
                  label="Fullname"
                  type="text"
                  id="fullname"
                  placeholder="Eg. John Doe"
                  value={values.fullname}
                  style={`${styles.input}`}
                  change={handleChange}
                  name="fullname"
                  onBlur={handleBlur}
                />
                <p style={{ color: 'red', marginBottom: '5px' }}>{values.errors.fullname}</p>
              </div>
              <div className={styles.validate_input}>
                <InputField
                  label="Email"
                  type="email"
                  id="email"
                  placeholder="Eg. xyz@abc.com"
                  value={values.email}
                  style={`${styles.input}`}
                  change={handleChange}
                  name="email"
                  onBlur={handleBlur}
                />
                <p style={{ color: 'red', marginBottom: '5px' }}>{values.errors.email}</p>
              </div>
            </div>
            <div className={styles.input_group}>
              <InputField
                label="Phone"
                type="phone"
                id="phone"
                placeholder="Eg. 08060...."
                value={values.phone}
                style={`${styles.input} ${styles.first_input}`}
                change={handleChange}
                name="phone"
              />
              <InputField
                label="Location"
                type="text"
                id="skill"
                placeholder="Eg. lagos"
                value={values.location}
                style={`${styles.input} ${styles.second_input}`}
                change={handleChange}
                name="location"
              />
            </div>
            <InputField
              label="Skills"
              type="text"
              id="skill"
              placeholder="Eg. Javascript, React, PHP..."
              value={values.skills}
              style={styles.input}
              change={handleChange}
              name="skills"
            />
            <Fieldset text="Social Handles" style={styles.connection_container}>
              <div className={styles.input_group}>
                <div className={`${styles.first_input}`}>
                  <InputField
                    type="text"
                    id="twitter"
                    label="Twitter"
                    value={values.twitter}
                    style={`${styles.input}`}
                    change={handleChange}
                    name="twitter"
                  />
                </div>
                <div className={`${styles.second_input}`}>
                  <InputField
                    type="text"
                    id="linkedIn"
                    label="LinkedIn"
                    value={values.linkedIn}
                    style={`${styles.input}`}
                    change={handleChange}
                    name="linkedIn"
                  />
                </div>
              </div>
              <div className={styles.input_group}>
                <div className={`${styles.first_input}`}>
                  <InputField
                    type="text"
                    id="github"
                    label="GitHub"
                    value={values.github}
                    style={`${styles.input}`}
                    change={handleChange}
                    name="github"
                  />
                </div>
                <div className={`${styles.second_input}`}>
                  <InputField
                    type="text"
                    id="facebook"
                    label="Facebook"
                    value={values.facebook}
                    style={`${styles.input}`}
                    change={handleChange}
                    name="facebook"
                  />
                </div>
              </div>
            </Fieldset>

            <div id="inputField" className={styles.input}>
              <label htmlFor="bio">Bio</label>
              <textarea
                id="inputField"
                rows="6"
                cols="50"
                placeholder="Eg. tell us about you"
                label="bio"
                name="bio"
                value={values.bio}
                className={styles.textarea}
                onChange={handleChange}
              />
            </div>

            <div className={styles.buttons}>
              <div className={styles.button}>
                <Button className="btn-success-solid register" text="Save Changes" />
              </div>
              <Link to="/dashboard">
                <Button className="btn-danger-solid register" text="Discard Changes" />
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;

// id: "5d53201d137ef40415ecf2c6", name: "Omolayo Victor", email: "Remymartins0398@yahoo.com", avatar: "//www.gravatar.com/avatar/d415f0e30c471dfdd9bc4f827329ef48?s=200&r=pg&d=mm", isAdmin: false, …}
// avatar: "//www.gravatar.com/avatar/d415f0e30c471dfdd9bc4f827329ef48?s=200&r=pg&d=mm"
// createdAt: "2019-08-13T20:39:57.350Z"
// deleted: false
// email: "Remymartins0398@yahoo.com"
// id: "5d53201d137ef40415ecf2c6"
// isAdmin: false
// isMentor: true
// isVerified: true
// name: "Omolayo Victor"
// skills: []

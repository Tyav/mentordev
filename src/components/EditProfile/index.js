import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import { formatBeforeUpdate, formatLocalUser } from '../../helper/formatUpdateData';
import styles from './EditProfile.module.css';
import InputField from '../InputField';
import '../InputField/InputField.css';
import Fieldset from '../FieldSet';
import Button from '../Button';
import { UserObject } from '../../Context';

const EditProfile = ({ edit }) => {
  const token = window.localStorage.getItem('token');
  let localUser = JSON.parse(window.localStorage.getItem('user'));
  const userValue = formatLocalUser({ ...localUser });
  const { user, setUser } = useContext(UserObject);
  const [values, setValues] = useState({
    ...userValue,
    errors: {
      fullname: '',
      email: ''
    }
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = formatBeforeUpdate(values);
    axios({
      method: 'PUT',
      url: `http://localhost:6060/api/v1/user/me`,
      headers,
      data: { ...data }
    })
      .then(response => {
        console.log(response);
        if (response.data.payload.statusCode !== 200) {
          localUser = { ...localUser, ...response.data.payload };
          window.localStorage.setItem('user', JSON.stringify(localUser));
          return <Redirect to="/dashboard/profile" />;
        }
      })
      .catch(error => {
        console.log(error);
      });
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
                  disabled={edit}
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
                  disabled={edit}
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
                disabled={edit}
              />
              <InputField
                label="Location"
                type="text"
                id="location"
                placeholder="Eg. lagos"
                value={values.location}
                style={`${styles.input} ${styles.second_input}`}
                change={handleChange}
                name="location"
                disabled={edit}
              />
            </div>
            <InputField
              label="Skills"
              type="text"
              id="skills"
              placeholder="Eg. Javascript, React, PHP..."
              value={values.skills}
              style={styles.input}
              change={handleChange}
              name="skills"
              disabled={edit}
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
                    disabled={edit}
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
                    disabled={edit}
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
                    disabled={edit}
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
                    disabled={edit}
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
                disabled={edit}
                style={edit ? {} : { borderBottom: '2px solid rgb(85, 85, 85)' }}
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

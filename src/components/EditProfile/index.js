import React, { useState } from 'react';

import InputField from '../InputField';
import styles from './EditProfile.module.css';
import Button from '../Button';
import Fieldset from '../FieldSet';
import formatBeforeUpdate from '../../helper/formatUpdateData';
import '../InputField/InputField.css';

const EditProfile = () => {
  const [values, setValues] = useState({
    fullname: '',
    email: '',
    phone: '',
    location: '',
    skills: '',
    bio: '',
    linkedIn: '',
    facebook: '',
    twitter: '',
    github: '',
    errors: {
      fullname: '',
      email: ''
    }
  });

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

    return setValues({ ...values, errors: { fullname: '', email: '' } });
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                onChange={handleChange}
                name="phone"
              />
              <InputField
                label="Location"
                type="text"
                id="skill"
                placeholder="Eg. lagos"
                value={values.location}
                style={`${styles.input} ${styles.second_input}`}
                onChange={handleChange}
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
              onChange={handleChange}
              name="skills"
            />
            <Fieldset text="Connections" style={styles.connection_container}>
              <div className={styles.input_group}>
                <div className={`${styles.first_input}`}>
                  <InputField
                    type="text"
                    id="twitter"
                    label="Twitter"
                    value={values.twitter}
                    style={`${styles.input}`}
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
              <Button className="btn-danger-solid register" text="Discard Changes" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;

import React, { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import Card from '../../components/Card';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import UserDashHeading from '../../components/UserDashHeading';
import { UserObject } from '../../Context';
import { formatBeforeUpdate, formatLocalUser } from '../../helper/formatUpdateData';
import ChangePassword from '../../components/ChangePassword';

function EditProfile() {
  const [edit, setEdit] = useState(true);
  const token = window.localStorage.getItem('token');
  const { user, setUser } = useContext(UserObject);
  const [values, setValues] = useState({
    ...user,
    errors: {
      fullname: '',
      email: ''
    }
  });

  useEffect(()=> {
setValues({...values, ...user})
  }, [user])

  const handleEdit = () => setEdit(() => !edit);
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
        if (response.data.payload.statusCode !== 200) {
          setUser(()=>formatLocalUser({ ...user, ...response.data.payload }));
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
      return setValues({
        ...values,
        errors: { ...values.errors, [name]: `${name} is required` }
      });

    const emailRegexp = /\S+@\S+\.\S+/;
    if (name === 'email' && emailRegexp.test(value) === false)
      return setValues({
        ...values,
        errors: { ...values.errors, [name]: `${name} is not valid.` }
      });
    return setValues({ ...values, errors: { ...values.errors, [name]: '' } });
  };

  const style = {
    width: '100%',
    background: '#fff',
    borderRadius: '4px',
    border: '1px solid #e6ecf5',
    padding: '20px',
    marginBottom: '20px'
  };
  return (
    <>
      <UserDashHeading text="Edit Profile" icon="account-edit" />
      <form style={{ width: '100%' }} onSubmit={handleSubmit}>
        <Card styles={style}>
          <div className="new-edit-form-toggle">
            <input type="checkbox" id="form-toggle" className="offscreen" onClick={handleEdit} />
            Enable Editing <label htmlFor="form-toggle" className="switch" />
          </div>
          <div className="new-half-input">
            <InputField
              label="Fullname"
              type="text"
              id="fullname"
              placeholder="Eg. John Doe"
              value={values.fullname}
              change={handleChange}
              name="fullname"
              onBlur={handleBlur}
              disabled={edit}
            />
            <InputField
              label="Email"
              type="email"
              id="email"
              placeholder="Eg. xyz@abc.com"
              value={values.email}
              change={handleChange}
              name="email"
              onBlur={handleBlur}
              disabled={edit}
            />
          </div>
          <div className="new-half-input">
            <InputField
              label="Phone"
              type="phone"
              id="phone"
              placeholder="Eg. 08060...."
              value={values.phone}
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
            change={handleChange}
            name="skills"
            disabled={edit}
          />
          <div className="new-input-set">
            <label className="new-form-label">Social Handles</label>
            <div className="new-half-input">
              <InputField
                type="text"
                id="twitter"
                label="Twitter"
                value={values.twitter}
                change={handleChange}
                name="twitter"
                disabled={edit}
              />
              <InputField
                type="text"
                id="linkedIn"
                label="LinkedIn"
                value={values.linkedIn}
                change={handleChange}
                name="linkedIn"
                disabled={edit}
              />
            </div>
            <div className="new-half-input">
              <InputField
                type="text"
                id="github"
                label="GitHub"
                value={values.github}
                change={handleChange}
                name="github"
                disabled={edit}
              />
              <InputField
                type="text"
                id="facebook"
                label="Facebook"
                value={values.facebook}
                change={handleChange}
                name="facebook"
                disabled={edit}
              />
            </div>
          </div>
          <lable className="new-form-label" htmlFor="inputField">
            Bio
          </lable>
          <textarea
            className="new-textarea"
            id="inputField"
            rows="6"
            placeholder="Eg. tell us about you"
            label="bio"
            name="bio"
            value={values.bio}
            onChange={handleChange}
            disabled={edit}
            style={edit ? {} : { borderBottom: '1px solid rgb(128, 120, 120)' }}
          />
          <br />
          <Button className="btn-success-solid center-element" text="Save Changes" />
        </Card>
      </form>

      <ChangePassword />
    </>
  );
}

export default EditProfile;

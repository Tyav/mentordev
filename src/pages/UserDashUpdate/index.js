import React, { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
/*
 *Context
 */
import { DashContext } from '../../Context';

/**
 * Helpers
 */
import { readCookie, eraseCookie } from '../../helper/cookie';
import {
  formatBeforeUpdate,
  formatLocalUser,
} from '../../helper/formatUpdateData';

import NewInputField from '../../components/NewInputField';
/**
 * Styling
 */
import './UserDashProfileUpdate.css';

function ProfileUpdate() {
  const nue_prof = readCookie('nue_prof');
  const [showPassword, setShowPassword] = useState(false);
  const [edit, setEdit] = useState(nue_prof ? false : true);
  const token = readCookie('mentordev_token');
  const { user, setUser } = useContext(DashContext);
  const [values, setValues] = useState({
    ...user,
    errors: {
      fullname: '',
      email: '',
    },
    success: '',
  });

  console.log(values);

  console.log(user);

  const [image, setImage] = useState({
    file: '',
  });

  useEffect(() => {
    setValues({ ...values, ...user });
  }, [user]);

  const handleEdit = () => {
    setEdit(() => !edit);
  };
  const handleChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  const handleSubmit = e => {
    //e.preventDefault()
    eraseCookie('nue_prof');
    const data = formatBeforeUpdate(values);
    axios({
      method: 'PUT',
      url: `${process.env.REACT_APP_BACKEND_URL}/user/me`,
      headers,
      data: { ...data },
    })
      .then(response => {
        if (response.data.statusCode === 200) {
          const responseUser = formatLocalUser({
            ...user,
            ...response.data.payload,
          });
          setUser(prev => ({ ...prev, ...responseUser }));
          setValues({
            ...responseUser,
            success: 'Profile Updated Successfully',
          });
          setTimeout(() => {
            setValues({
              ...responseUser,
              success: '',
            });
          }, 3000);
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
        errors: { ...values.errors, [name]: `${name} is required` },
      });

    const emailRegexp = /\S+@\S+\.\S+/;
    if (name === 'email' && emailRegexp.test(value) === false)
      return setValues({
        ...values,
        errors: { ...values.errors, [name]: `${name} is not valid.` },
      });
    return setValues({ ...values, errors: { ...values.errors, [name]: '' } });
  };

  function passwordToggle() {
    setShowPassword(!showPassword);
  }

  const style = {
    backgroundColor: '#0bdaac',
    width: '20%',
    color: '#fff',
    borderRadius: '30px',
    border: 'none',
    cursor: 'pointer',
  };

  const style2 = {
    width: '15%',
  };

  const backgroundImage =
    'https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80';
  return (
    <section className="user-dash-profile-update">
      <div className="profile-image-area">
        <div
          className="profile-cover-image-area"
          style={{
            background: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <form>
            <label for="coverImage">
              <i className="mdi mdi-image-size-select-actual"></i> Upload
              Profile Banner
            </label>
            <input type="file" name="coverImage" id="coverImage" />
          </form>
        </div>
        <div className="profile-avatar-image-area">
          <form>
            <label for="avatar">
              <i className="mdi mdi-camera"></i>
            </label>
            <input type="file" name="avatar" id="avatar" />
          </form>
          <img src={`${backgroundImage}`} alt="user avatar" />
        </div>
      </div>
      <div className="profile-form-area">
        <div
          className="new-edit-form-toggle"
          style={{ color: '#5b5d6f', fontSize: '0.8rem', paddingLeft: '10px' }}
        >
          <input
            type="checkbox"
            id="form-toggle"
            className="offscreen"
            checked={!edit}
            onClick={handleEdit}
          />
          Enable Editing <label htmlFor="form-toggle" className="switch" />
        </div>
        <div className="user-update-form-area">
          <div className="user-update-account-info">
            <p>
              <img src="/assets/img/manager.svg" alt="password" /> Account Info
            </p>
            <NewInputField
              inputType="text"
              inputId="fullname"
              inputLable="Fullname"
              inputPlaceholder="Eg. Jon Snow"
              inputValue={values.fullname}
              isEnabled={edit}
            />
            <NewInputField
              inputType="email"
              inputId="email"
              inputLable="Email"
              inputPlaceholder="Eg. Jon Snow"
              inputValue={values.email}
              isEnabled={true}
            />
            <NewInputField
              inputType="text"
              inputId="phone"
              inputLable="Phone"
              inputPlaceholder="Eg. Jon Snow"
              inputValue={values.phone}
              isEnabled={edit}
            />
            <NewInputField
              inputType="text"
              inputId="location"
              inputLable="Laction"
              inputPlaceholder="Eg. Lagos, Nigeria"
              inputValue={values.location}
              isEnabled={edit}
            />
            <NewInputField
              inputType="text"
              inputId="skills"
              inputLable="Skills"
              isEnabled={edit}
              inputPlaceholder="Eg. PHP, Javascript"
              inputValue={values.skills}
            />
            <label>Bio</label>
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
              style={
                edit ? {} : { borderBottom: '1px solid rgb(128, 120, 120)' }
              }
            />
          </div>
          <div className="user-update-social-info">
            <p>
              <img src="/assets/img/social-network.svg" alt="password" />
              Social Media Handles
            </p>
            <NewInputField
              inputType="text"
              inputId="likedin"
              inputLable="LinkedIn"
              inputPlaceholder="http://linkedin.com"
              inputValue={values.linkedin}
              isEnabled={edit}
            />
            <NewInputField
              inputType="text"
              inputId="twitter"
              inputLable="Twitter"
              inputPlaceholder="http://twitter.com"
              inputValue={values.skills}
              isEnabled={edit}
            />
            <NewInputField
              inputType="text"
              inputId="github"
              inputLable="GitHub"
              inputPlaceholder="http://github.com"
              inputValue={values.skills}
              isEnabled={edit}
            />
            <NewInputField
              inputType="text"
              inputId="facebook"
              inputLable="Facebook"
              inputPlaceholder="http://facebook.com"
              inputValue={values.skills}
              isEnabled={edit}
            />
            <NewInputField
              inputType="submit"
              inputId="save"
              inputValue="Save Changes"
              style={style}
              isEnabled={edit}
            />
          </div>
        </div>
      </div>
      <div className="update-password-area">
        <p>
          <img
            src="/assets/img/key.svg"
            alt="password
          "
          />
          Change Password
        </p>
        <NewInputField
          inputType="password"
          inputId="currentPassword"
          inputLable="Current Password"
          inputValue=""
          isEnabled={edit}
        />
        <div className="input-half">
          <NewInputField
            inputType="password"
            inputId="newPassword"
            inputLable="New Password"
            inputValue=""
            isEnabled={edit}
          />
          <NewInputField
            inputType="password"
            inputId="confirmNewPassword"
            inputLable="Confirm New Password"
            inputValue=""
            isEnabled={edit}
          />
        </div>
        <NewInputField
          inputType="submit"
          inputId="save"
          inputValue="Change Password"
          style={{ ...style, ...style2 }}
          isEnabled={edit}
        />
      </div>
    </section>
  );
}

export default ProfileUpdate;

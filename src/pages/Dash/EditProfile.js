import React, { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import Card from '../../components/Card';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import UserDashHeading from '../../components/UserDashHeading';
import { UserObject } from '../../Context';
import {
  formatBeforeUpdate,
  formatLocalUser,
} from '../../helper/formatUpdateData';
import ChangePassword from '../../components/ChangePassword';
import { readCookie, eraseCookie } from '../../helper/cookie';
import getParams from '../../helper/getParams';

function EditProfile() {
  const nue_prof = readCookie('nue_prof');
  const [showPassword, setShowPassword] = useState(false);
  const [edit, setEdit] = useState(nue_prof ? false : true);
  const token = readCookie('mentordev_token');
  const { user, setUser } = useContext(UserObject);
  const [values, setValues] = useState({
    ...user,
    errors: {
      fullname: '',
      email: '',
    },
    success: '',
  });

  const [image, setImage] = useState({
    file: '',
  });

  useEffect(() => {
    setValues({ ...values, ...user });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handleSubmit = () => {
    eraseCookie('nue_prof');
    //event.preventDefault();
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
    width: '100%',
    background: '#fff',
    borderRadius: '4px',
    border: '1px solid #e6ecf5',
    padding: '20px',
    marginBottom: '20px',
  };

  function handleUpload(e) {
    //Image Preview
    let previewImg = document.getElementById('currentAndPreviewImage');
    previewImg.src = URL.createObjectURL(e.target.files[0]);
    let uploadButton = document.querySelector('#changeUserProfileImage button');
    uploadButton.innerHTML = 'Save Profile Image';
    setImage({
      file: e.target.files[0],
    });
  }
  //upload image
  function upload(e) {
    e.preventDefault();
    //Image upload Button
    let uploadButton = document.querySelector('#changeUserProfileImage button');
    uploadButton.innerHTML = 'Saving Image ...';
    // set form
    let form = new FormData();
    form.append('avatar', image.file);
    axios({
      url: `${process.env.REACT_APP_BACKEND_URL}/user/${user.id}/images`,
      data: form,
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
      method: 'put',
    }).then(resp => {
      if (resp.data.statusCode === 200) {
        uploadButton.innerHTML =
          '<i class="mdi mdi-checkbox-marked-circle-outline" style="font-size: 20px"></i>';
      }
      const responseUser = formatLocalUser({
        ...user,
        ...resp.data.payload,
      });
      setUser(prev => ({ ...prev, ...responseUser }));
    });
  }

  return (
    <>
      <UserDashHeading text="Edit Profile" icon="account-edit" />
      <form style={{ width: '100%' }} id="editProfileForm">
        <Card styles={style}>
          <div className="new-edit-form-toggle">
            <input
              type="checkbox"
              id="form-toggle"
              className="offscreen"
              checked={!edit}
              onClick={handleEdit}
            />
            Enable Editing <label htmlFor="form-toggle" className="switch" />
          </div>
          <p
            style={{
              color: '#45cc89',
              textAlign: 'center',
              marginBottom: '5px',
            }}
          >
            {values.success}
          </p>
          {/* create upload input for images */}
          {!edit && (
            <>
              <div className="updateProfileImageDisplay">
                <img src={user.avatar} id="currentAndPreviewImage" />
                <label htmlFor="upload">
                  <i className="mdi mdi-camera"></i>
                </label>
              </div>
              <form
                encType="multipart/form-data"
                onSubmit={upload}
                id="changeUserProfileImage"
              >
                <input
                  type="file"
                  id="upload"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={handleUpload}
                  capture={true}
                  style={{ display: 'none' }}
                />
                <button type="submit">Save Profile Image</button>
              </form>
            </>
          )}
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
              placeholder="Email required"
              value={values.email}
              change={handleChange}
              name="email"
              onBlur={handleBlur}
              disabled={edit || values.email}
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
          <label className="new-form-label" htmlFor="inputField">
            Bio
          </label>
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
          {!edit && (
            <Button
              className="btn-success-solid center-element"
              text="Save Changes"
              onButtonClick={handleSubmit}
            />
          )}
        </Card>
      </form>
      {showPassword ? (
        <ChangePassword hide={passwordToggle} />
      ) : (
        <Button
          className="center-element btn-success-solid"
          text="Change Password"
          onButtonClick={passwordToggle}
        />
      )}
    </>
  );
}

export default EditProfile;

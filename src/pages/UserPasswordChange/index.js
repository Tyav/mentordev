import React, { useState } from 'react';

import axios from 'axios';

import { readCookie } from '../../helper/cookie';

import NewInputField from '../../components/NewInputField';

function UserPasswordChange({ edit, style }) {
  const token = readCookie('mentordev_token');
  const [values, setValues] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
    errors: '',
    success: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const changePassword = e => {
    e.preventDefault();
    const { currentPassword, newPassword, confirmNewPassword } = values;
    if (newPassword !== confirmNewPassword) {
      return setValues({
        ...values,
        errors: 'New password and Confirm new password must match.',
      });
    }

    if (newPassword.length < 7) {
      return setValues({
        ...values,
        errors: 'Password length is invalid',
      });
    }

    axios({
      method: 'PUT',
      url: `${process.env.REACT_APP_BACKEND_URL}/auth/change-password`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: { password: currentPassword, newPassword },
    })
      .then(response => {
        if (response.data.statusCode === 200) {
          setValues({
            ...values,
            success: 'Success',
          });
          setTimeout(() => {
            setValues({
              currentPassword: '',
              newPassword: '',
              confirmNewPassword: '',
              errors: '',
              success: '',
            });
          }, 3000);
          return;
        }
        setValues({
          ...values,
          errors: 'Current password is incorrect',
        });
        setTimeout(() => {
          setValues({
            ...values,
            errors: '',
          });
        }, 3000);
        return;
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="update-password-area" id="update-password-area">
      <p>
        <img
          src="/assets/img/key.svg"
          alt="password
          "
        />
        Change Password
      </p>
      <form style={{ width: '100%' }} onSubmit={changePassword}>
        <NewInputField
          inputType="password"
          inputId="currentPassword"
          inputLable="Current Password"
          inputValue={values.currentPassword}
          isEnabled={edit}
          changeHandler={handleChange}
        />
        <div className="input-half">
          <NewInputField
            inputType="password"
            inputId="newPassword"
            inputLable="New Password"
            inputValue={values.newPassword}
            isEnabled={edit}
            changeHandler={handleChange}
          />
          <NewInputField
            inputType="password"
            inputId="confirmNewPassword"
            inputLable="Confirm New Password"
            inputValue={values.confirmNewPassword}
            isEnabled={edit}
            changeHandler={handleChange}
          />
        </div>
        {!edit && (
          <NewInputField
            inputType="submit"
            inputId="save"
            inputValue="Change Password"
            style={style}
            isEnabled={edit}
          />
        )}
      </form>
    </div>
  );
}

export default UserPasswordChange;

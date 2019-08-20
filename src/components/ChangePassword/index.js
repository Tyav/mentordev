import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import Card from '../Card';
import InputField from '../InputField';
import Button from '../Button';

const ChangePassword = () => {
  const token = window.localStorage.getItem('token');
  const [values, setValues] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
    errors: '',
    success: ''
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
        errors: 'New password and Confirm new password must match.'
      });
    }

    if (newPassword.length < 7) {
      return setValues({
        ...values,
        errors: 'Password length is invalid'
      });
    }

    axios({
      method: 'PUT',
      url: `http://localhost:6060/api/v1/auth/change-password`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      data: { password: currentPassword, newPassword }
    })
      .then(response => {
        console.log(response);
        if (response.data.statusCode === 200) {
          return setValues({
            ...values,
            success: 'Success'
          });
        }
        return setValues({
          ...values,
          errors: 'Current password is incorrect'
        });
      })
      .catch(error => {
        console.log(error);
      });
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
    <form style={style} onSubmit={changePassword}>
      <Card styles={style}>
        <h2 className="center-element">Change Password</h2>
        <p style={{ color: 'red', marginBottom: '5px' }}>{values.errors}</p>
        <p style={{ color: '#45cc89', marginBottom: '5px' }}>{values.success}</p>
        <InputField
          label="Current Password"
          type="password"
          id="currentPassword"
          name="currentPassword"
          value={values.currentPassword}
          change={handleChange}
        />
        <div className="new-half-input">
          <InputField
            label="New Password"
            type="password"
            id="newPassword"
            name="newPassword"
            value={values.newPassword}
            change={handleChange}
          />
          <InputField
            label="Confirm New Password"
            type="password"
            id="confirmNewPassword"
            name="confirmNewPassword"
            value={values.confirmNewPassword}
            change={handleChange}
          />
        </div>
        <Button className="btn-success-solid center-element" text="Change Password" />
      </Card>
    </form>
  );
};

export default ChangePassword;

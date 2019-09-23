import React, { useState } from 'react';

import Navbar from '../../components/Navbar';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import FormHeader from '../../components/FormHeader';
import FormAlert from '../../components/Alerts/FormAlert';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './ResetPassword.css';

function ResetPassword() {
  const [gotoLogin, setGotoLogin] = useState(false);
  const [alert, setAlert] = useState({
    message: '',
    show: false,
    type: ''
  });
  const [values, setValues] = useState({});

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (values.password !== values.cpassword) {
      setAlert({
        message: 'Passwords Should Match',
        show: true,
        type: 'form-alert-danger'
      });

      setTimeout(() => {
        setAlert({
          show: false
        });
      }, 4000);
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    const config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`
      }
    };

    const body = JSON.stringify({
      password: values.password
    });

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/reset-password`,
        body,
        config
      );

      if (response.data.statusCode !== 200) {
        setAlert({
          message: response.data.message,
          show: true,
          type: 'form-alert-danger'
        });

        setTimeout(() => {
          setAlert({
            show: false
          });
        }, 4000);
        return;
      }

      setAlert({
        message: response.data.message,
        show: true,
        type: 'form-alert-success'
      });

      setTimeout(() => {
        setAlert({
          show: false
        });
        setGotoLogin(true);
      }, 4000);
      return;
    } catch (error) {
      console.error('Server error: ', error);
      setAlert({
        message: 'An error occured, Please Try Again',
        show: true,
        type: 'form-alert-danger'
      });
      setTimeout(() => {
        setAlert({
          message: '',
          show: false,
          type: ''
        });
      }, 4000);
    }
  };

  if (gotoLogin) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Navbar />
      <div id="resetpasswordForm">
        <FormHeader title="Reset Password" />
        {alert.show ? (
          <FormAlert type={alert.type}>{alert.message}</FormAlert>
        ) : (
          ''
        )}
        <form onSubmit={handleSubmit}>
          <InputField
            label="New Password"
            type="password"
            id="password"
            placeholder="Eg. xyz@abc.com"
            value={values.password || ''}
            change={handleChange}
          />
          <InputField
            label="Confirm Password"
            type="password"
            id="cpassword"
            placeholder="Eg. xyz@abc.com"
            value={values.cpassword || ''}
            change={handleChange}
          />
          <Button className="btn-success-solid" text="Reset Password" />
        </form>
      </div>
    </>
  );
}

export default ResetPassword;

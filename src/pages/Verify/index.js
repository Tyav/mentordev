import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import axios from 'axios';

import FormAlert from '../../components/Alerts/FormAlert';

import getParams from '../../helper/getParams';

function Verify() {
  const token = getParams('token');
  const [alert, setAlert] = useState({
    message: '',
    show: false,
    type: '',
  });
  const [redirectRegister, setRedirectRegister] = useState(false);
  const [redirectDashboard, setRedirectDashboard] = useState(false);

  const auth = {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    setAlert({
      message: 'Loading...',
      show: true,
      type: 'form-alert-success',
    });
    axios({
      method: 'POST',
      url: 'http://localhost:6060/api/v1/auth/verify',
      auth,
    })
      .then(response => {
        if (response.data.statusCode !== 200) {
          setAlert({
            message: response.data.message,
            show: true,
            type: 'form-alert-danger',
          });
          setTimeout(() => {
            setRedirectRegister(true);
          }, 4000);
          return;
        }
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('tokenID', response.data.payload.id);
        localStorage.setItem('auth', true);
        setAlert({
          message: 'Redirecting',
          show: true,
          type: 'form-alert-success',
        });
        setTimeout(() => {
          setRedirectDashboard(true);
        }, 4000);
      })
      .catch(() => {
        setAlert({
          message: 'An error occured. Please try again later',
          show: true,
          type: 'form-alert-danger',
        });
        setTimeout(() => {
          setRedirectRegister(true);
        }, 4000);
      });
  }, []);

  if (!token) {
    return <Redirect to="/register" />;
  }
  if (redirectRegister) {
    return <Redirect to="/register" />;
  }
  if (redirectDashboard) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <div className="verify-page">
        <FormAlert type={alert.type}>{alert.message}</FormAlert>
        <br />
        <div className="verify-page-img">
          <img src="/assets/img/verify-page.svg" alt="verify-page" />
        </div>
      </div>
    </>
  );
}

export default Verify;

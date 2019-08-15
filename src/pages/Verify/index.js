import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';

import axios from 'axios';

import Navbar from '../../components/Navbar';
import Button from '../../components/Button';

import getParams from '../../helper/getParams';

function Verify() {
  const token = getParams('token');
  const [alert, setAlert] = useState({
    message: '',
    show: false,
    type: '',
  });

  const [loading, setLoading] = useState(false);
  const [redirectRegister, setRedirectRegister] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [redirectDashboard, setRedirectDashboard] = useState(false);

  const auth = {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    setLoading(true);
    if (!token) {
      setNotFound(true);
      setLoading(false);
    }
    axios({
      method: 'POST',
      url: 'http://localhost:6060/api/v1/auth/verify',
      auth,
    })
      .then(response => {
        if (response.data.statusCode !== 200) {
          setAlert({
            message: 'This link may have expired',
            show: true,
            type: 'form-alert-danger',
          });
          setTimeout(() => {
            setNotFound(true);
            setLoading(false);
          }, 9000);
          return;
        }
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('tokenID', response.data.payload.id);
        localStorage.setItem('auth', true);
        setAlert({
          message: 'Redirecting...',
          show: true,
          type: 'form-alert-success',
        });
        setNotFound(false);
        setLoading(false);
        setTimeout(() => {
          setRedirectDashboard(true);
        }, 2000);
      })
      .catch(() => {
        setNotFound(true);
        setLoading(false);
        setAlert({
          message:
            'An error occured. Please click on the link sent to you via email again',
          show: true,
          type: 'form-alert-danger',
        });
        setRedirectRegister(true);
      });
  }, []);

  const duringLoad = () => {
    return <img src="/assets/img/loading-icon.svg" alt="loading" />;
  };

  const afterLoading = () => {
    return !notFound ? (
      <>
        <div className="verify-page-img">
          <img src="/assets/img/verify-page.svg" alt="verify-page" />
        </div>
        <br />
        <p>{alert.message}</p>
        <br />
      </>
    ) : (
      <>
        <div className="verify-page-img">
          <img src="/assets/img/404.svg" alt="verify-page" />
        </div>
        <br />
        <p>{alert.message}</p>
        <br />
        <Link to="/login">
          <Button className="btn-success-solid" text="Login" />
        </Link>
        <span className="msgPipes">|</span>
        <Link to="/register">
          <Button className="btn-success-solid" text="Register" />
        </Link>
      </>
    );
  };

  //   if (redirectRegister) {
  //     return <Redirect to="/register" />;
  //   }
  if (redirectDashboard) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <Navbar />
      <div className="verify-page">
        <br />
        {loading ? duringLoad() : afterLoading()}
      </div>
    </>
  );
}

export default Verify;
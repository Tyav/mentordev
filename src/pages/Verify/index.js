import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';

import axios from 'axios';

import Navbar from '../../components/Navbar';
import Button from '../../components/Button';

import getParams from '../../helper/getParams';
import { readCookie, createCookie } from '../../helper/cookie'

function Verify() {
  const token = getParams('token');
  const [alert, setAlert] = useState({
    message: '',
    show: false,
    type: '',
  });

  const [loading, setLoading] = useState(false);
  // const [redirectRegister, setRedirectRegister] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [redirectDashboard, setRedirectDashboard] = useState(false);

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    setLoading(true);
    if (!token) {
      setNotFound(true);
      setLoading(false);
    }
    axios({
      method: 'PUT',
      url: `${process.env.REACT_APP_BACKEND_URL}/auth/verify`,
      headers,
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
      // set mentor type
      if (response.data.payload.isMentor) createCookie('validateType', response.data.payload.isMentor);
      // set cookie for user login
      createCookie('mentordev_token', response.data.token);
        
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
        // setRedirectRegister(true);
      });
  }, [token]);

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
    
    return <Redirect to="/dashboard/profile" />;
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

import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Button from '../../components/Button';

//Stylings
import './Getstarted.css';

function GetStarted(props) {
  const email = props.location.state.email;
  const [animate, setAnimate] = useState(false);

  const handleClick = async event => {
    setAnimate(true);

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify({
      email
    });

    try {
      const response = await axios.post(
        'http://localhost:6060/api/v1/auth/verify-link',
        body,
        config
      );

      setTimeout(() => {
        setAnimate(false);
      }, 3000);

      if (response.data.message) {
        return (
          <Redirect
            to={{
              pathname: '/getstarted',
              state: { email: response.data.message }
            }}
          />
        );
      }
    } catch (error) {
      console.error('Server Error: ', error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div id="getstarted">
        <div className="emailDiv">
          <img
            id="email-logo"
            alt="email-img"
            src="/assets/img/email-sent1.svg"
          />
          <span className="message">
            <h1>Verification link Sent!</h1>
            <h3>
              MentorDev emailed a confirmation link to{' '}
              <span className="email">{email + '. '}</span>
              Check your email to proceed.
            </h3>
            <h3 className="resend-text">Didn't get a confirmation email?</h3>
            <span className="resend-link" onClick={handleClick}>
              {animate ? (
                <img
                  id="animate"
                  alt="animate-loading"
                  src="/assets/img/animate.svg"
                />
              ) : (
                <Button className="btn-success-solid" text="Resend Link" />
              )}
            </span>
          </span>
        </div>
      </div>
    </>
  );
}

export default GetStarted;

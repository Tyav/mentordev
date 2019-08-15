import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import Navbar from '../../components/Navbar';

//Stylings
import './Getstarted.css';

function GetStarted(props) {
  const email = props.location.state.email;

  const handleClick = async event => {
      console.log('clicked....')
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
          <img alt="mentor a developer" src="/assets/img/email-sent1.svg" />
          <span>
            <h1>Verification link Sent!</h1>
            <h3>
              MentorDev emailed a confirmation link to{' '}
              <span className="email">{email + '. '}</span>
              Check your email to proceed.
            </h3>
            <h3>Didn't get a confirmation email?</h3>
            <span className="resend-link" onClick={handleClick}>
              resend Link
            </span>
          </span>
        </div>
      </div>
    </>
  );
}

export default GetStarted;

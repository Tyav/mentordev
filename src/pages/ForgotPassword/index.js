import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import InputField from '../../components/InputField';
import Button from '../../components/Button';
import FormHeader from '../../components/FormHeader';
import Navbar from '../../components/Navbar';
import FormAlert from '../../components/Alerts/FormAlert';

//Stylings
import './ForgotPassword.css';

function ForgotPassword() {
  const [value, setValue] = useState({
    email: '',
    response: '',
    show: false,
    type: '',
  });

  const submitFormHandler = e => {
    e.preventDefault();
    if (!value.email) {
      setValue({
        email: '',
        response: 'Kindly fill in an email',
        show: !value.show,
        type: 'form-alert-danger',
      });
      return;
    }
    axios({
      method: 'POST',
      url: 'http://localhost:6060/api/v1/auth/forgot-password',
      data: { ...value },
    }).then(response => {
      if (
        response.data.statusCode !== 200 ||
        response.data.statusCode === 200
      ) {
        setValue({
          email: '',
          response: response.data.message,
          show: !value.show,
          type: 'form-alert-success',
        });
      }
    });
  };

  const inputChnageHandler = e => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div id="loginForm">
        <FormHeader title="Forgot Password" />
        {value.show ? (
          <FormAlert type={value.type}>{value.response}</FormAlert>
        ) : (
          ''
        )}
        <form onSubmit={submitFormHandler}>
          <InputField
            label="Email"
            type="email"
            id="email"
            placeholder="Eg. xyz@abc.com"
            value={value.email}
            change={inputChnageHandler}
          />
          <Button
            className="btn-success-solid"
            text="Send password reset email"
          />
          <p>
            Back to <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default ForgotPassword;

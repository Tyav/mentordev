import React from 'react';
import { Link } from 'react-router-dom';

import InputField from '../../components/InputField';
import Button from '../../components/Button';
import FormHeader from '../../components/FormHeader';
import Navbar from '../../components/Navbar';

//Stylings
import './ForgotPassword.css';

function ForgotPassword() {
  const submitFormHandler = e => {
    e.preventDefault();
  };
  return (
    <>
      <Navbar />
      <div id="loginForm">
        <FormHeader title="Forgot Password" />
        <form>
          <InputField
            label="Email"
            type="email"
            id="email"
            placeholder="Eg. xyz@abc.com"
            value="oketega@gmail.com"
          />
          <Button
            className="btn-success-solid"
            text="Send password reset email"
            onButtonClick={submitFormHandler}
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

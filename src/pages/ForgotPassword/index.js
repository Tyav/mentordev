import React from 'react';

import InputField from '../../components/InputField';
import Button from '../../components/Button';
import FormHeader from '../../components/FormHeader';

//Stylings
import './ForgotPassword.css';

function ForgotPassword() {
  const submitFormHandler = e => {
    e.preventDefault();
  };
  return (
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
      </form>
    </div>
  );
}

export default ForgotPassword;
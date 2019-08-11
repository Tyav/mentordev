import React from 'react';

import InputField from '../../components/InputField';
import Button from '../../components/Button';
import FormHeader from '../../components/FormHeader';

import './ResetPassword.css';

function ResetPassword() {
  return (
    <div id="loginForm">
      <FormHeader title="Reset Password" />
      <form>
        <InputField
          label="New Password"
          type="password"
          id="password"
          placeholder="Eg. xyz@abc.com"
          value="oketega@gmail.com"
        />
        <InputField
          label="Confirm Password"
          type="password"
          id="cpassword"
          placeholder="Eg. xyz@abc.com"
          value="oketega@gmail.com"
        />
        <Button
          className="btn-success-solid"
          text="Reset Password"
          onButtonClick="do somethin"
        />
      </form>
    </div>
  );
}

export default ResetPassword;

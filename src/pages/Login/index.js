import React from 'react';

import InputField from '../../components/InputField';
import Button from '../../components/Button';
import FormHeader from '../../components/FormHeader';

//Stylings
import './Login.css';

function Login() {
  return (
    <div id="loginForm">
      <FormHeader title="Login" />
      <form>
        <InputField
          label="Email"
          type="email"
          id="email"
          placeholder="Eg. xyz@abc.com"
          value="oketega@gmail.com"
        />
        <InputField
          label="Password"
          type="password"
          id="email"
          placeholder="Eg. pasword"
          value="xxxxxxxxxx"
        />
        <Button
          className="btn-success-solid"
          text="Login"
          onButtonClick="do somethin"
        />
      </form>
    </div>
  );
}

export default Login;

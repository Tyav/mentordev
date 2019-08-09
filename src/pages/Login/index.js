import React from 'react';

import InputField from '../../components/InputField';
import Button from '../../components/Button';
import FormHeader from '../../components/FormHeader';

//Stylings
import './Login.css';

function Login() {
  const loginFormHandler = (e) => {
    e.preventDefault()
  }
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
          onButtonClick={loginFormHandler}/>
        <p>
          Don't have an account? <a href="/">Singup</a>
        </p>
      </form>
    </div>
  );
}

export default Login;

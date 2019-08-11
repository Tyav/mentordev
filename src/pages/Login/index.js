import React from 'react';
import { Link } from 'react-router-dom';

import InputField from '../../components/InputField';
import Button from '../../components/Button';
import FormHeader from '../../components/FormHeader';
import Navbar from '../../components/Navbar';

//Stylings
import './Login.css';

function Login() {
  const loginFormHandler = e => {
    e.preventDefault();
  };
  return (
    <>
      <Navbar />
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
            onButtonClick={loginFormHandler}
          />
          <p>
            Don't have an account? <Link to="/register">Singup</Link> or{' '}
            <Link to="/forgotpassword">Forgot your Password?</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;

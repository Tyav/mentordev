import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import InputField from '../../components/InputField';
import Button from '../../components/Button';
import FormHeader from '../../components/FormHeader';
import Navbar from '../../components/Navbar';
import FormAlert from '../../components/Alerts/FormAlert';

//Stylings
import './Login.css';

function Login() {
  const [loginResponse, setLoginResponse] = useState({
    message: '',
    show: false,
    type: ''
  });

  const [auth, setAuth] = useState(false);

  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const loginFormHandler = e => {
    e.preventDefault();
    axios({
      method: 'POST',
      url: 'http://localhost:6060/api/v1/auth/login',
      data: { ...values }
    }).then(response => {
      if (response.data.statusCode !== 200) {
        setLoginResponse({
          message: 'Email or password incorrect',
          show: true,
          type: 'form-alert-danger'
        });
        setTimeout(() => {
          setLoginResponse({
            message: '',
            show: false,
            type: ''
          });
        }, 4000);
        return;
      }
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('tokenID', response.data.payload.id);
      localStorage.setItem('auth', true);
      setLoginResponse({
        message: 'Login Successful',
        show: true,
        type: 'form-alert-success'
      });
      setTimeout(() => {
        setLoginResponse({
          message: '',
          show: false,
          type: ''
        });
        setAuth(true);
      }, 4000);
    });
  };

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    if (auth) {
      setAuth(true);
    }
  }, [auth]);
  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <Navbar />
      <div id="loginForm">
        <FormHeader title="Login" />
        {loginResponse.show ? (
          <FormAlert type={loginResponse.type}>
            {loginResponse.message}
          </FormAlert>
        ) : (
          ''
        )}
        <form onSubmit={loginFormHandler}>
          <InputField
            label="Email"
            type="email"
            id="email"
            placeholder="Eg. xyz@abc.com"
            value={values.email}
            change={handleChange}
          />
          <InputField
            label="Password"
            type="password"
            id="password"
            placeholder="Eg. pasword"
            value={values.password}
            change={handleChange}
          />
          <Button className="btn-success-solid" text="Login" />
          <p>
            {/* Don't have an account? <Link to="/register">Singup</Link> or{' '}
            <Link to="/forgot-password"> Forgot your Password?</Link> */}
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;

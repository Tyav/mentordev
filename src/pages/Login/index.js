import React, { useState, useEffect, useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

import InputField from '../../components/InputField';
import Button from '../../components/Button';
import FormHeader from '../../components/FormHeader';
import Navbar from '../../components/Navbar';
import FormAlert from '../../components/Alerts/FormAlert';
import SocialLogin from '../../components/SocialLogin';

import { formatLocalUser } from '../../helper/formatUpdateData';
import { UserObject } from '../../Context';
import { readCookie, createCookie } from '../../helper/cookie';
//Stylings
import './Login.css';

function Login() {
  const { user, setUser } = useContext(UserObject);

  const [loginResponse, setLoginResponse] = useState({
    message: '',
    show: false,
    type: '',
  });

  const [auth, setAuth] = useState(false);

  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const loginFormHandler = e => {
    e.preventDefault();
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
      data: { ...values },
    }).then(response => {
      if (response.data.statusCode !== 200) {
        setLoginResponse({
          message: 'Email or password incorrect',
          show: true,
          type: 'form-alert-danger',
        });
        setTimeout(() => {
          setLoginResponse({
            message: '',
            show: false,
            type: '',
          });
        }, 4000);
        return;
      }
      // set mentor type
      if (response.data.payload.isMentor) {
        createCookie('validateType', response.data.payload.isMentor);
      }
      // set cookie for user login
      createCookie('mentordev_token', response.data.token);

      setUser(formatLocalUser(response.data.payload)); // make user object available with usecontext
      setLoginResponse({
        message: 'Login Successful',
        show: true,
        type: 'form-alert-success',
      });
      setTimeout(() => {
        setLoginResponse({
          message: '',
          show: false,
          type: '',
        });
        setAuth(true);
      }, 4000);
    });
  };

  useEffect(() => {
    const token = readCookie('mentordev_token');
    if (token) {
      setAuth(true);
    }
  }, [auth]);
  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <div className="gray-layout">
        <Navbar />
        <div id="loginForm">
          <FormHeader title="Log In to Mentor Dev" />
          {loginResponse.show ? (
            <FormAlert type={loginResponse.type}>
              {loginResponse.message}
            </FormAlert>
          ) : (
            ''
          )}
          <form onSubmit={loginFormHandler}>
            <InputField
              label="Email Address"
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
          </form>
          <SocialLogin
            heading="Or Login with"
            gitUrl={`client_id=3f6909c4ef2e4f58f4f8&scope=user`}
          ></SocialLogin>
          <p>
            Don't have an account? <Link to="/register">Singup</Link> |{' '}
            <Link to="/mentorapplication">Become a mentor</Link> or{' '}
            <Link to="/forgot-password"> Forgot your Password?</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;

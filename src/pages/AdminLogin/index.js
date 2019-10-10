import React, { useState, useEffect, useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

import InputField from '../../components/InputField';
import Button from '../../components/Button';
import FormHeader from '../../components/FormHeader';
import Navbar from '../../components/Navbar';
import FormAlert from '../../components/Alerts/FormAlert';
import { formatLocalUser } from '../../helper/formatUpdateData';
import { UserObject } from '../../Context';
import { createCookie, readCookie } from '../../helper/cookie'

//Stylings
import './Login.css';

function Login() {
  const { setUser } = useContext(UserObject);
  const [isAdmin, setIsAdmin] = useState(false);

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
      url: `${process.env.REACT_APP_BACKEND_URL}/auth/admin-login`,
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
      createCookie('fleg3402nf045nv9245n34ve044242', true);
      createCookie('mlt', response.data.token);
      setIsAdmin(response.data.payload.isAdmin);
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
    const token = readCookie('mlt');
    if (token) {
      setAuth(true);
    }
  }, [auth]);
  if (auth && isAdmin) {
    return <Redirect to="/admin" />;
  }

  return (
    <>
      <Navbar></Navbar>
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
            <Link to="/forgot-password"> Forgot your Password?</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;

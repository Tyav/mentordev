import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

import InputField from '../../components/InputField';
import Button from '../../components/Button';
import FormHeader from '../../components/FormHeader';
import Checkbox from '../../components/Checkbox';
import Navbar from '../../components/Navbar';
import FormAlert from '../../components/Alerts/FormAlert';
import axios from 'axios';

import './Signup.css';

function Signup() {
  const [signupResponse, setSignupResponse] = useState({
    message: '',
    show: false,
    type: '',
  });

  const [values, setValues] = useState({});
  const [checked, setChecked] = useState(false);
  const [getstarted, setGetstarted] = useState(false);

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleCheck = e => {
    setChecked(!checked);
  };

  const signUpFormHandler = async e => {
    e.preventDefault();

    if (values.password !== values.cpassword) {
      setSignupResponse({
        message: 'Passwords Should Match',
        show: true,
        type: 'form-alert-danger',
      });

      setTimeout(() => {
        setSignupResponse({
          show: false,
        });
      }, 4000);
      return;
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { fullname: name, email, password, isMentor } = {
      ...values,
      isMentor: checked,
    };
    const body = JSON.stringify({
      name,
      email,
      password,
      isMentor,
    });

    try {
      const response = await axios.post(
        'http://localhost:6060/api/v1/user',
        body,
        config,
      );

      if (response.data.statusCode !== 200) {
        setSignupResponse({
          message: response.data.errors
            ? Object.values(response.data.errors)[0]
            : response.data.error.msg,
          show: true,
          type: 'form-alert-danger',
        });

        setTimeout(() => {
          setSignupResponse({
            show: false,
          });
        }, 4000);
        return;
      }

      setSignupResponse({
        message: 'Signup Successful',
        show: true,
        type: 'form-alert-success',
      });
      setTimeout(() => {
        setSignupResponse({
          message: '',
          show: false,
          type: '',
        });
        setGetstarted(true);
      }, 4000);
    } catch (error) {
      setSignupResponse({
        message: 'Signup Failed, Please try again',
        show: true,
        type: 'form-alert-danger',
      });
      setTimeout(() => {
        setSignupResponse({
          message: '',
          show: false,
          type: '',
        });
      }, 4000);
    }
  };

  if (getstarted) {
    return (
      <Redirect
        to={{
          pathname: '/getstarted',
          state: { email: values.email }
        }}
      />
    );
  }
  return (
    <>
      <Navbar />
      <div id="loginForm">
        <FormHeader title="Register" />
        {signupResponse.show ? (
          <FormAlert type={signupResponse.type}>
            {signupResponse.message}
          </FormAlert>
        ) : (
          ''
        )}
        <form onSubmit={signUpFormHandler}>
          <InputField
            label="Fullname"
            type="text"
            id="fullname"
            placeholder="Eg. John Doe"
            value={values.fullname || ''}
            change={handleChange}
          />
          <InputField
            label="Email"
            type="email"
            id="email"
            placeholder="Eg. xyz@abc.com"
            value={values.email || ''}
            change={handleChange}
          />
          <InputField
            label="Password"
            type="password"
            id="password"
            placeholder=""
            change={handleChange}
            value={values.password || ''}
          />
          <InputField
            label="Confirm Password"
            type="password"
            id="cpassword"
            placeholder=""
            change={handleChange}
            value={values.cpassword || ''}
          />
          <Checkbox
            label="I am a mentor"
            type="checkbox"
            id="ismentor"
            placeholder=""
            value={checked}
            change={handleCheck}
          />
          <Button className="btn-success-solid register" text="Register" />

              <a href="https://github.com/login/oauth/authorize?client_id=59a761c57c054d36a80d&scope=user"><p>
                Github
              </p>
              </a>
          
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default withRouter(Signup);

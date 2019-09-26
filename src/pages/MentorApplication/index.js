import React, { useState } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';

//Component
import Navbar from '../../components/Navbar';
import InputField from '../../components/InputField';
import FormHeader from '../../components/FormHeader';
import FormAlert from '../../components/Alerts/FormAlert';
import Button from '../../components/Button';
import SocialLogin from '../../components/SocialLogin';
//Css
import './MentorApply.css';

function MentorApplication() {
  const [signupResponse, setSignupResponse] = useState({
    message: '',
    show: false,
    type: '',
  });

  const [values, setValues] = useState({});
  const [getstarted, setGetstarted] = useState(false);

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
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
    const { fullname: name, email, stacks, linkedin, password, isMentor } = {
      ...values,
      isMentor: true,
    };
    const body = JSON.stringify({
      name,
      email,
      skills: stacks.split(','),
      connection: { linkedin },
      password,
      isMentor,
    });

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user`,
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
          state: { email: values.email },
        }}
      />
    );
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="new-mentor-application">
        <div className="new-mentor-brief">
          <img src="/assets/img/mentorapp.jpeg" />
          <h1>Mentor a Developer</h1>
          <p>
            Mentor the next generation of World Class Developers. Register on
            the platform and create scheduled time for when you would be
            available.
          </p>
        </div>
        <div className="new-mentor-form">
          <div id="loginForm" style={{ width: '85%' }}>
            <FormHeader title="Sign Up to Become a Mentor" />
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
                label="Stacks (separate with commas , )"
                type="text"
                id="stacks"
                placeholder="Eg. PHP, Javascript, Python"
                value={values.stacks || ''}
                change={handleChange}
              />
              <InputField
                label="LinkedIn Profile Link"
                icon="linkedin-box"
                type="text"
                id="linkedin"
                placeholder="Eg. https://www.linkedin.com/in/johndoe/"
                value={values.linkedin || ''}
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
              <Button
                className="btn-success-solid register"
                text="Become a Mentor"
              />
            </form>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
            <SocialLogin
              heading="Or register with"
              gitUrl={`client_id=59a761c57c054d36a80d&scope=user`}
            ></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
}

export default MentorApplication;

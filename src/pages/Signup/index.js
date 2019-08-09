import React from 'react';

import InputField from '../../components/InputField';
import Button from '../../components/Button';
import FormHeader from '../../components/FormHeader';
import Checkbox from '../../components/Checkbox';

import './Signup.css';

function Signup() {
  const signUpFormHandler = (e) => {
    e.preventDefault()
  }
  return (
    <div id="loginForm">
      <FormHeader title="Register" />
      <form>
        <InputField
          label="Fullname"
          type="text"
          id="fullname"
          placeholder="Eg. John Doe"
          value=""
        />
        <InputField
          label="Email"
          type="email"
          id="email"
          placeholder="Eg. xyz@abc.com"
          value=""
        />
        <InputField
          label="Password"
          type="password"
          id="password"
          placeholder=""
          value=""
        />
        <InputField
          label="Confirm Password"
          type="password"
          id="cpassword"
          placeholder=""
          value=""
        />
        <Checkbox
          label="I am a mentor"
          type="checkbox"
          id="ismentor"
          placeholder=""
          value=""
        />
        <Button
          className="btn-success-solid register"
          text="Register"
          onButtonClick={signUpFormHandler}
        />
        <p>
          Already have an account? <a href="/">Login</a>
        </p>
      </form>
    </div>
  );
}

export default Signup;

import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import InputField from '../../components/InputField';
import Button from '../../components/Button';
import FormHeader from '../../components/FormHeader';
import FormAlert from '../../components/Alerts/FormAlert';
import Navbar from '../../components/Navbar';
import CheckBox from '../../components/Checkbox';

function CreateAdmin() {
  const [loginResponse, setLoginResponse] = useState({
    message: '',
    show: false,
    type: '',
  });

  const [values, setValues] = useState({
    email: '',
    username: '',
    isMentor: false,
    password: '',
    isSuper: false,
  });

  const adminFormHandler = e => {
    e.preventDefault();
    console.log(values);
  };

  const handleChange = e => {
    console.log(e.target.name);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar></Navbar>
      <div id="loginForm" style={{ width: '80%' }}>
        <FormHeader title="Create Admin" />
        {loginResponse.show ? (
          <FormAlert type={loginResponse.type}>
            {loginResponse.message}
          </FormAlert>
        ) : (
          ''
        )}
        <form onSubmit={adminFormHandler}>
          <InputField
            label="Email"
            type="email"
            id="email"
            placeholder="Eg. xyz@abc.com"
            value={values.email}
            change={handleChange}
          />
          <InputField
            label="Username"
            type="text"
            id="username"
            value={values.username}
            change={handleChange}
          />
          <select id="adminAccountType" name="isMentor" onChange={handleChange}>
            <option value="">Select account type</option>
            <option value={true}>Mentor</option>
            <option value={false}>Mentee</option>
          </select>
          <InputField
            label="Password"
            type="password"
            id="password"
            placeholder="Eg. pasword"
            value={values.password}
            change={handleChange}
          />
          <CheckBox
            label="Is Super Admin"
            type="checkbox"
            id="isSuper"
            styles={{ marginLeft: '0' }}
          ></CheckBox>
          <Button className="btn-success-solid" text="Save Admin" />
          <p>
            <Link to="/admin">Back to Dashboard</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default CreateAdmin;

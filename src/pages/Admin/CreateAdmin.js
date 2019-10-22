import React, { useState } from 'react';
import axios from 'axios'

import { Link } from 'react-router-dom';

import InputField from '../../components/InputField';
import Button from '../../components/Button';
import FormHeader from '../../components/FormHeader';
import FormAlert from '../../components/Alerts/FormAlert';
import Navbar from '../../components/Navbar';
import CheckBox from '../../components/Checkbox';
import { readCookie } from '../../helper/cookie'

function CreateAdmin() {
  const [loginResponse, setLoginResponse] = useState({
    message: '',
    show: false,
    type: '',
  });

  const [values, setValues] = useState({
    email: '',
    name: '',
    isMentor: false,
    password: '',
    isSuper: false,
  });

  const adminFormHandler = e => {
    e.preventDefault();
    console.log(values);
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_BACKEND_URL}/admin`,
      data: { ...values },
      headers: {
        authorization: `Bearer ${readCookie('mlt')}`
      }
    }).then(({data}) => {
      if (data.statusCode !== 200) {
        setLoginResponse({
          message: data.message || 'Error creating Admin. Try again',
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
      setLoginResponse({
        message: data.message || 'Admin successfully created',
        show: true,
        type: 'form-alert-success',
      });
      setTimeout(() => {
        setLoginResponse({
          message: '',
          show: false,
          type: '',
        });
      }, 4000);
    });


  };

  const handleChange = e => {
    console.log(e.target.name);
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleMentorChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value === 'true' });
  };
  const handleBoolChange = e => {
    setValues({ ...values, [e.target.name]: e.target.checked });
  };
  return (
    <>
      {/* <Navbar></Navbar> */}
      <div id="loginForm" style={{ width: '80%' }}>
        <FormHeader title="Create Admin" />
        {loginResponse.show ? (
          <FormAlert type={loginResponse.type}>
            {loginResponse.message}
          </FormAlert>
        ) : (
          ''
        )}
        <form autoComplete="off" onSubmit={adminFormHandler}>
          <InputField
            required={true}
            label="Name"
            type="text"
            id="name"
            placeholder="Name"
            value={values.name}
            change={handleChange}
            autoComplete={'off'}
          />
          <InputField
            label="Email"
            type="email"
            id="email"
            placeholder="Eg. xyz@abc.com"
            value={values.email}
            change={handleChange}
            required={true}
            autoComplete={'off'}
          />
          <select id="adminAccountType" name="isMentor" onChange={handleMentorChange} required>
            <option value="true" disabled selected>Select account type</option>
            <option value={true}>Mentor</option>
            <option value={false}>Mentee</option>
          </select>
          <InputField
            required={true}
            label="Password"
            type="password"
            id="password"
            placeholder="Eg. pasword"
            value={values.password}
            change={handleChange}
            autoComplete={'off'}
          />
          <CheckBox
            label="Is Super Admin"
            type="checkbox"
            id="isSuper"
            styles={{ marginLeft: '0' }}
            change={handleBoolChange}
            value={values.isSuper}
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

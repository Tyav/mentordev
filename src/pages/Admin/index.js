import React from 'react';
import { Redirect } from 'react-router-dom';

import Login from './login';
import Dashboard from './Dashboard';
import { readCookie } from '../../helper/cookie';

function Admin() {
  const token = readCookie('mlt');

  if (!token) {
    return <Redirect to="/adminlogin" />;
  }

  return (
    <>
      <Dashboard></Dashboard>
    </>
  );
}

export default Admin;

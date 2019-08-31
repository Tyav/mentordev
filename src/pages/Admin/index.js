import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Login from './login';
import Dashboard from './Dashboard';

function Admin() {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Dashboard></Dashboard>
    </>
  );
}

export default Admin;

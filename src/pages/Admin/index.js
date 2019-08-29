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
      <Route path="/admin" exact component={Dashboard} />
      <Route path="/admin/login" exact component={Login} />
    </>
  );
}

export default Admin;

import React from 'react';
import { Route } from 'react-router-dom';

import Login from './login';
import Dashboard from './Dashboard';

function Admin() {
  return (
    <>
      <Route path="/admin" exact component={Dashboard} />
      <Route path="/admin/login" exact component={Login} />
    </>
  );
}

export default Admin;

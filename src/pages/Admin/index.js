import React from 'react';
import { Route } from 'react-router-dom';

import Login from './login';
import Dashboard from './Dashboard';

function Admin() {
  return (
    <>
      <Dashboard></Dashboard>
    </>
  );
}

export default Admin;

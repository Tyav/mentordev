import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { useState } from 'react';

import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/MenteeDashboard';
import Forgot from './pages/ForgotPassword';
import Signup from './pages/Signup';
import About from './pages/About';
import Login from './pages/Login';
import GetStarted from './pages/GetStarted';
import Verify from './pages/Verify';
import MainAbout from './pages/MainAbout';
import { UserObject } from './Context';

import './App.css';

function App() {
  const [user, setUser] = useState({ hello: 'there' });

  return (
    <UserObject.Provider value={{ user, setUser }}>
      <Router>
        <Route path="/" exact component={MainAbout} />
        <Route path="/register" component={Signup} />
        <Route path="/about" component={MainAbout} />
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={Forgot} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/getstarted" component={GetStarted} />
        <Route path="/verify" component={Verify} />
      </Router>
    </UserObject.Provider>
  );
}

export default App;

import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { useState } from 'react';

import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/MenteeDashboard';
import Forgot from './pages/ForgotPassword';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import GetStarted from './pages/GetStarted';
import Verify from './pages/Verify';
import MainAbout from './pages/MainAbout';
import Dash from './pages/Dash';
import Admin from './pages/Admin/Dashboard';
import { UserObject } from './Context';

import './App.css';

function App() {
  const [user, setUser] = useState({});

  return (
    <UserObject.Provider value={{ user, setUser }}>
      <Router>
        <Route path="/" exact component={MainAbout} />
        <Route path="/register" component={Signup} />
        <Route path="/about" component={MainAbout} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin/login" component={AdminLogin} />
        <Route path="/forgot-password" component={Forgot} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/formerdashboard" component={Dashboard} />
        <Route path="/getstarted" component={GetStarted} />
        <Route path="/verify" component={Verify} />
        <Route path="/dashboard" component={Dash} />
        <Route path="/admin" component={Admin}></Route>
      </Router>
    </UserObject.Provider>
  );
}

export default App;

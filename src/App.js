import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';

import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/MenteeDashboard';
import Forgot from './pages/ForgotPassword';
import Signup from './pages/Signup';
import About from './pages/About';
import Login from './pages/Login';
import Verify from './pages/Verify';
import MainAbout from './pages/MainAbout';

import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" exact component={MainAbout} />
      <Route path="/register" component={Signup} />
      <Route path="/abouts" component={About} />
      <Route path="/about" component={MainAbout} />
      <Route path="/login" component={Login} />
      <Route path="/forgot-password" component={Forgot} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/verify" component={Verify} />
    </Router>
  );
}

export default App;

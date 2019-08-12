import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Forgot from './pages/ForgotPassword';
import Dashboard from './pages/MenteeDashboard';

import About from './pages/About';

function App() {
  return (
    <Router>
      <Route path="/" exact component={About} />
      <Route path="/register" component={Signup} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/forgotpassword" component={Forgot} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
}

export default App;

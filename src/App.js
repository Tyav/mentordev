import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import MenteeDashboard from './pages/MenteeDashboard';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route path="/dashboard" component={MenteeDashboard} />
    </BrowserRouter>
  );
}

export default App;

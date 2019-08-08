import React from 'react';
import './App.css';

import ForgotPassword from './pages/ForgotPassword';
import Navbar from './components/Navbar';
import Login from './pages/Login';
//Testing login route
function App() {
  return (
    <div>
      <Navbar />
      <ForgotPassword />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import ResetPassword from './pages/ResetPassword';
//Testing login route
function App() {
  return (
    <div>
      <Navbar />
      <ResetPassword />
    </div>
  );
}

export default App;

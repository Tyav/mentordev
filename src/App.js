import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import MenteeDashboard from './pages/MenteeDashboard';



function App() {
  return (
    <div>
      <Navbar />
      {/* <Login /> */}
      <MenteeDashboard />
      <Signup />
    </div>
  );
}

export default App;

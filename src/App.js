import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Signup from './pages/Signup';
//Testing login route
function App() {
  return (
    <div>
      <Navbar />
      <Signup />
    </div>
  );
}

export default App;

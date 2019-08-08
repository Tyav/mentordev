import React from 'react';
import './App.css';

import Login from './pages/Login';
import Navbar from './components/Navbar';

//Testing login route
function App() {
  return (
    <div>
      <Navbar />
      <Login />
    </div>
  );
}

export default App;

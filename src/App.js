import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Tag from './components/Tag';
import MentorsProfileCard from './components/MentorsProfileCard/index';
import ProfileHeader from './components/ProfileHeader';
//Testing login route
import MenteeDashboard from './pages/MenteeDashboard';

function App() {
  const style = {
    background: '#fff',
    height: '370px',
    borderBottom: '1px solid #efefef',
    display: 'flex',
    alignItems: 'center'
  };
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      {/* <ProfileHeader /> */}
      {/* <MentorsProfileCard /> */}
      {/* <Navbar /> */}
      {/* <Login /> */}
      {/* <MenteeDashboard /> */}
      {/* <Signup /> */}
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={MenteeDashboard} />
    </BrowserRouter>
  );
}

export default App;

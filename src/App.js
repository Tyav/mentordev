import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import MentorsProfileCard from './components/MentorsProfileCard'
import ProfileHeader from './components/ProfileHeader/index'

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
    <div>
      <ProfileHeader />
      <MentorsProfileCard />
      <Navbar />
      {/* <Login /> */}
      <MenteeDashboard />
      <Signup />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

import Login from './pages/Login';
import Tag from './components/Tag';
import MentorsProfileCard from './components/MentorsProfileCard/index';
import ProfileHeader from './components/ProfileHeader';
//Testing login route
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
    </div>
  );
}

export default App;

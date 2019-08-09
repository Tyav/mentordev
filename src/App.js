import React from 'react';
import './App.css';

import Login from './pages/Login';
import Tag from './components/Tag';
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
    </div>
  );
}

export default App;

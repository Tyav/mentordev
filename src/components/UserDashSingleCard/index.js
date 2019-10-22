import React from 'react';

function UserDashSingleCard() {
  const backgroundImage =
    'https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80';
  return (
    <div className="user-single-card">
      <div
        className="user-single-card-image"
        style={{
          background: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img src={`${backgroundImage}`} />
      </div>
      <div className="user-single-card-content">
        <p>Oke Tega</p>
        <p className="user-single-card-content-p">
          I am an aspiring Sofware Engineer from Lagos, Nigeria
        </p>
        <p className="user-single-card-extra">
          <img src="/assets/img/email.svg" /> &nbsp; oketegah@gmail.com
        </p>
        <p className="user-single-card-extra">
          <img src="/assets/img/location-pin.svg" /> &nbsp; Lagos, Nigeria
        </p>
        <div className="user-single-card-stack">
          <p>PHP</p>
          <p>JavaScript</p>
        </div>
      </div>
    </div>
  );
}

export default UserDashSingleCard;

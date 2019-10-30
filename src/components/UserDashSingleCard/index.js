import React from 'react';

function UserDashSingleCard({
  username,
  briefDescription,
  email,
  location,
  stacks,
  coverImage,
  profileImage,
}) {
  const backgroundImage =
    'https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80';
  return (
    <div className="user-single-card">
      <div
        className="user-single-card-image"
        style={{
          background: `url(${coverImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img src={`${profileImage}`} />
      </div>
      <div className="user-single-card-content">
        <p>{username}</p>
        <p className="user-single-card-content-p">{briefDescription}</p>
        <p className="user-single-card-extra">
          <img src="/assets/img/email.svg" /> &nbsp; {email}
        </p>
        <p className="user-single-card-extra">
          <img src="/assets/img/location-pin.svg" /> &nbsp; {location}
        </p>
        <div className="user-single-card-stack">
          {stacks.map(stack => (
            <p>{stack}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserDashSingleCard;

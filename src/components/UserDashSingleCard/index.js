import React from 'react';
import { Link } from 'react-router-dom';

import './UserDashSingleCard.css';

function UserDashSingleCard({
  username,
  briefDescription,
  email,
  location,
  stacks,
  coverImage,
  profileImage,
  id,
  viewMore,
  schedule,
}) {
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
        {email && schedule ? (
          <p className="user-single-card-extra">
            <img src="/assets/img/email.svg" alt="email" /> &nbsp; {email}
          </p>
        ) : null}
        {location ? (
          <p className="user-single-card-extra">
            <img src="/assets/img/location-pin.svg" alt="location" /> &nbsp;{' '}
            {location}
          </p>
        ) : null}
        {schedule ? (
          <p className="user-single-card-extra">
            <img src="/assets/img/calendar.svg" alt="calendar" /> &nbsp;{' '}
            {schedule ? schedule.day : 'Day'}
          </p>
        ) : null}
        {schedule ? (
          <p className="user-single-card-extra">
            <img src="/assets/img/clock.svg" alt="clock" /> &nbsp;{' '}
            {schedule ? `${schedule.time.from} - ${schedule.time.to}` : 'Time'}
          </p>
        ) : null}
        <div className="user-single-card-stack">
          {stacks ? stacks.map(stack => <p key={stack}>{stack}</p>) : null}
        </div>
        {viewMore ? (
          <Link to="/" onClick={viewMore} id={id}>
            <i className="mdi mdi-eye-outline"></i>&nbsp;View More
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default UserDashSingleCard;

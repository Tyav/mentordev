import React from 'react';
import Tag from '../Tag';

function UserLatestConnect({
  image,
  name,
  email,
  tags = [],
  schedule,
  userlocation,
}) {
  return (
    <div className="new-dash-user-profile">
      <div className="new-dash-card-header">
        <img src={image} alt="user profile" />
        <i className="mdi mdi-dots-vertical" />
      </div>
      <p className="new-dash-username">{name}</p>
      <p className="new-dash-username">{email}</p>
      <div className="new-dash-user-tags">
        {tags.map((tag, index) => (
          <Tag key={index} tagname={tag} />
        ))}
      </div>
      <p className="new-dash-user-mentor-sch">
        <span>{schedule}</span>
      </p>
      <p>{userlocation}</p>
    </div>
  );
}

export default UserLatestConnect;

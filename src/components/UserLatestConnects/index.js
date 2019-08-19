import React from 'react';
import Tag from '../Tag';

function UserLatestConnect(props) {
  return (
    <div className="new-dash-user-profile">
      <div className="new-dash-card-header">
        <img className = "new-dash-profile-img" src={props.image} alt="user profile" />
        <i className="mdi mdi-dots-vertical" />
      </div>
      <p className="new-dash-username">{props.name}</p>
      <p className="new-dash-username">{props.email}</p>
      <div className="new-dash-user-tags">
        {props.tags.map(tag => (
          <Tag tagname={tag} />
        ))}
      </div>
      <p className="new-dash-user-mentor-sch">
        <span>{props.schedule}</span>
      </p>
    </div>
  );
}

export default UserLatestConnect;

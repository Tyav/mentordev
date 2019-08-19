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
    <div className="new-dash-user-profile" key={props.key}>
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
      <div className="conditional-buttons">{addButtons(props.buttons)}</div>
    </div>
  );
}

function addButtons(buttons) {
  if (buttons.length < 1) {
    return '';
  }
  return buttons.map((button, index) => (
    <a className={`new-dash-schedule-link button${index}`} href="/" key={index}>
      <i className="mdi lg-green-ic" /> {button}
    </a>
  ));
}
export default UserLatestConnect;

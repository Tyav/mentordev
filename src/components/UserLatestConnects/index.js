import React from 'react';
import Tag from '../Tag';
import axios from 'axios';

function UserLatestConnect({
  image,
  name,
  email,
  tags,
  schedule,
  userlocation,
  key,
  buttons,
  requestId, //bringing in the requestId as a prop
  requestApproval //the function that handles the approval in the parent object...
}) {
  tags = tags || [];
  return (
    <div className="new-dash-user-profile" key={key}>
      <div className="new-dash-card-header">
        <img src={image} alt="user profile" />
        <i className="mdi mdi-dots-vertical" />
      </div>
      <p className="new-dash-username">{name}</p>
      <p className="new-dash-username">{email}</p>
      <div className="new-dash-user-tags">
        {tags.map((tag, index) => (
          <Tag tagname={tag} key={index} />
        ))}
      </div>
      <p className="new-dash-user-mentor-sch">
        <span>{schedule}</span>
      </p>
      <p>{userlocation}</p>
      <div className="conditional-buttons">
        {buttons ? addButtons(buttons, requestId, requestApproval) : ''}
      </div>
    </div>
  );
}

// the addButtons function with two parameters. the buttons array ['Approve', 'Reject'], and the requestId
function addButtons(buttons, requestId, requestApproval) {
  if (buttons.length < 1) {
    return '';
  }
  return buttons.map((button, index) => (
    <a
      className={`new-dash-schedule-link ${button} button${index}`}
      href="/"
      key={index}
      id={requestId}
      onClick={requestApproval}
    >
      <i className="mdi lg-green-ic" /> {button}
    </a>
  ));
}

export default UserLatestConnect;

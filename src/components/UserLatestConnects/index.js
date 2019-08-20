import React from 'react';
import Tag from '../Tag';

function UserLatestConnect({ image, name, email, tags, schedule, userlocation, key, buttons }) {
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
      <div className="conditional-buttons">{buttons ? addButtons(buttons) : ''}</div>
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

export function viewRequests({ data }) {
  if (!data) return;
  if (data.length < 1) {
    return <p>No request today</p>;
  }

  return (
    <div className="new-recent-mentor-list">
      {data.map((request, index) => (
        <UserLatestConnect
          image={request.mentee.avatar}
          name={request.mentee.name}
          email={request.mentee.email}
          tags={request.mentee.skills}
          schedule={`${request.schedule.day}  ${request.schedule.time.from} to ${
            request.schedule.time.to
          }`}
          key={index}
          buttons={['Approve', 'Reject']}
        />
      ))}
    </div>
  );
}
export default UserLatestConnect;

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
  requestId //bringing in the requestId as a prop
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
        {buttons ? addButtons(buttons, requestId) : ''}
      </div>
    </div>
  );
}

const requestApproval = e => {
  const token = window.localStorage.getItem('token');
  e.preventDefault();
  const requestId = e.target.id;
  //grab the action from the classList.... the action is either  "Approve" or "Reject"
  const action = Array.from(e.target.classList)[1] === 'Approve'? 'Approved' : 'Rejected';

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };

  axios({
    method: 'PUT',
    url: `http://localhost:6060/api/v1/request/${requestId}?status=${action}`, headers
  })
    .then(response => {
      console.log(response,'hello this is the response')
    })
    .catch(error => {
      console.log(error);
    });
};

// the addButtons function with two parameters. the buttons array ['Approve', 'Reject'], and the requestId
function addButtons(buttons, requestId) {
  if (buttons.length < 1) {
    return '';
  }
  return buttons.map((button, index) => (
    <a
      className={`new-dash-schedule-link ${button} button${index}`}
      href="/"
      key={index}
      onClick={requestApproval}
      id={requestId}
    >
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
          schedule={`${request.schedule.day}  ${
            request.schedule.time.from
          } to ${request.schedule.time.to}`}
          key={index}
          buttons={['Approve', 'Reject']}
          requestId={request._id}
        />
      ))}
    </div>
  );
}
export default UserLatestConnect;

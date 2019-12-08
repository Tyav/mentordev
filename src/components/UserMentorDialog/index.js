import React, { useEffect, useState } from 'react';

import './UserMentorDialog.css';
import MentorSchedule from '../MentorSchedule';

function UserMentorDialog({ data, closeDialog }) {
  const [mentor, setMentor] = useState({});

  useEffect(() => {
    setMentor({ ...data });
  }, [data]);

  return (
    <div className="user-mentor-dialog">
      <div className="close-btn" onClick={closeDialog}>
        <i className="mdi mdi-close close-user-detail"></i>
      </div>
      <div className="user-dialog-brief-details">
        <div className="user-image-area">
          <img src={mentor.avatar} />
        </div>
        <div className="user-details-area">
          <p>
            {mentor.name}
            <span>
              <i className="mdi mdi-code-tags"></i>{' '}
              {mentor.skills ? mentor.skills.map(skill => skill + ' ') : null}
            </span>
            <p style={{ marginTop: '5px' }}>
              <i className="mdi mdi-map-marker"></i> {mentor.location}
            </p>
          </p>
        </div>
        <div className="user-bio-area">
          <h2>BIOGRAPHY</h2>
          <p>{mentor.bio}</p>
        </div>
      </div>
      <p className="available-schedules-heading">
        Available Schedules for {mentor.name}
      </p>
      <div className="user-mentor-dialog-schedule">
        <MentorSchedule id={mentor.id} />
      </div>
    </div>
  );
}

export default UserMentorDialog;

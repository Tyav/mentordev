import React from 'react';

/**
 * For listing all schedules for a single mentor
 */

function UserSchedule() {
  return (
    <div className="new-dash-user-schedule">
      <div className="new-dash-user-profile">
        <h2>Current Schedule</h2>
        <p className="new-dash-user-mentor-sch">
          <span>Monday 1:25 AM to 5:30 AM</span>
        </p>
        <p className="new-dash-user-mentor-sch">
          <span>Tuesday 5:25 AM to 5:30 PM</span>
        </p>
        <p className="new-dash-user-mentor-sch">
          <span>Wednesday 12:25 AM to 12:30 AM</span>
        </p>
        <p className="new-dash-user-mentor-sch">
          <span>Thursday 4:25 AM to 8:30 AM</span>
        </p>
        <p className="new-dash-user-mentor-sch">
          <span>Fridays 3:25 AM to 7:30 PM</span>
        </p>
        <a className="new-dash-schedule-link" href="/">
          <i className="mdi mdi-plus lg-green-ic" /> Schedule
        </a>
      </div>
    </div>
  );
}

export default UserSchedule;

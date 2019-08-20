import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

/**
 * For listing all schedules for a single mentor
 */

function UserSchedule() {
  const token = window.localStorage.getItem('token');
  const [schedules, setSchedules] = useState({ data: [], loading: true });
  useEffect(() => {
    getSchedule();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };

  const getSchedule = () => {
    return axios({
      method: 'GET',
      url: `http://localhost:6060/api/v1/user/me/schedules`,
      headers
    })
      .then(response => {
        setSchedules(() => ({ data: response.data.payload, loading: false }));
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="new-dash-user-schedule">
      <div className="new-dash-user-profile">
        <h2>Current Schedule</h2>
        {schedules.loading ? <p>loading...</p> : viewSchedule(schedules)}
      </div>
    </div>
  );
}

const formatParam = data => {
  return data
    .map(schedule => {
      return schedule._id;
    })
    .join(',');
};

function viewSchedule({ data }) {
  if (!data) return;

  const schedulesParam = formatParam(data);

  if (data.length < 1) {
    return (
      <>
        <p className="new-dash-user-mentor-sch" style={{ marginTop: '3rem', marginBottom: '1rem' }}>
          <span>You currently Dont have no Schedule </span>
        </p>
        <a className="new-dash-schedule-link" href="/">
          <i className="mdi mdi-plus lg-green-ic" /> Add Schedule
        </a>
      </>
    );
  }
  return (
    <>
      {data.map((schedule, index) => (
        <Link
          to={`/dashboard/mentor/requests/${schedule._id}`}
          className="schedule-list-items"
          key={index}
        >
          <p className="new-dash-user-mentor-sch">
            <span>
              {schedule.day} {schedule.time.from} to {schedule.time.to}
            </span>
          </p>
        </Link>
      ))}
      <Link
        to={{
          pathname: '/dashboard/mentor/allRequests',
          state: { scheduleIds: schedulesParam }
        }}
        className="new-dash-schedule-link"
      >
        <i className="mdi mdi-plus lg-green-ic" /> View All
      </Link>
    </>
  );
}

export default UserSchedule;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { readCookie } from '../../helper/cookie';
import ScheduleList from '../ScheduleList';

import './MentorSchedule.css';

export default function MentorSchedule({ id, close }) {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    axios({
      url: `${process.env.REACT_APP_BACKEND_URL}/user/${id}/schedules`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${readCookie('mentordev_token')}`,
      },
    })
      .then(resp => {
        setSchedules([...resp.data.payload]);
        console.log(resp.data.payload);
      })
      .catch(err => {});
  }, [id]);

  return (
    <>
      <div className="user-mentor-schedule-list">
        {schedules.map(schedule => {
          return (
            <ScheduleList
              key={schedule._id}
              from={schedule.time.from}
              to={schedule.time.to}
              day={schedule.day}
              id={schedule._id}
              close={close}
            />
          );
        })}
      </div>
    </>
  );
}

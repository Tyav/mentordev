import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { readCookie } from '../../helper/cookie';
import ScheduleList from '../ScheduleList'

export default function MentorSchedule({ id }) {
  const [schedules, setSchedules] = useState([]);
  useEffect(()=>{
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
      })
      .catch(err => {});
  
  }, [])

  return (
    <>
      <div>
        {schedules.map(schedule => {
          return (
            <ScheduleList 
              key={schedule._id}
              from={schedule.time.from}
              to={schedule.time.to}
              day={schedule.day}
              id={schedule._id}
            />
          );
        })}
      </div>
    </>
  );
}

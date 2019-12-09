import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ScheduleCard from '../../components/ScheduleCard';
import { readCookie } from '../../helper/cookie';

function ScheduleList() {
  let day = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thurday',
    'Friday',
    'Saturday',
  ];

  const [schedules, setSchedules] = useState([]);
  const token = readCookie('mentordev_token');
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    async function fetchData() {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/schedule`,
          config,
        );
        setSchedules([...res.data.payload]);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [token]);

  return (
    <>
      {schedules.map(schedule => {
        return (
          <ScheduleCard key={schedule._id} schedule={schedule} day={day} />
        );
      })}
    </>
  );
}

let getStyle = bool => {
  return {
    color: bool ? 'green' : 'red',
    backgroundColor: 'white',
    border: '2px solid',
    borderColor: bool ? '#00BCAE' : ' rgb(256, 100, 100)',
    borderRadius: '5px',
  };
};

export default ScheduleList;

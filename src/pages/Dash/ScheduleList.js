import React, { useState, useEffect } from 'react';

import UserDashHeading from '../../components/UserDashHeading';
import ScheduleCard from '../../components/ScheduleCard';
import axios from 'axios';

function ScheduleList() {
  const [schedules, setSchedules] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    async function fetchData() {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      try {
        const res = await axios.get(
          'http://localhost:6060/api/v1/schedule',
          config
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
      <UserDashHeading text="Mange Schedule" icon="clock" />
      {schedules.map(schedule => {
        return <ScheduleCard key = {schedule._id} schedule={schedule} />;
      })}
    </>
  );
}

export default ScheduleList;

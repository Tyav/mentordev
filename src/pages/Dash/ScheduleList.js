import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

import UserDashHeading from '../../components/UserDashHeading';
import ScheduleCard from '../../components/ScheduleCard';
import AddSchedule from '../../components/AddSchedule';
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
          Authorization: `Bearer ${token}`
        }
      };

      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/schedule`,
          config
        );
        setSchedules([...res.data.payload]);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [token]);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    // approveUser(id, button);
    setOpen(false);
  }
  function handleClose1() {
    setOpen(false);
  }
  return (
    <>
      <UserDashHeading text="Manage Time Slots" icon="clock" add={handleClickOpen}/>
      {schedules.map(schedule => {
        return <ScheduleCard key = {schedule._id} schedule={schedule} day={day}/>;
      })}
      <Dialog open={open} onClose={handleClose1} >
        <center><DialogTitle id="">Add Schedule</DialogTitle></center>
        <AddSchedule day={day} close={handleClose}/>
      </Dialog>    
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

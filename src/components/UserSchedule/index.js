import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import AddSchedule from '../AddSchedule'

import { readCookie } from '../../helper/cookie'

/**
 * For listing all schedules for a single mentor
 */


function UserSchedule() {
  const token = readCookie('mentordev_token');
  const [schedules, setSchedules] = useState({ data: [], loading: true });
  const [open, setOpen] = useState(false);
  useEffect(() => {
    getSchedule();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  function handleClose1() {
    setOpen(false);
  }
  
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };
  
  
  const getSchedule = () => {
    return axios({
      method: 'GET',
      url: `${process.env.REACT_APP_BACKEND_URL}/user/me/schedules`,
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
        <h2>Current Schedules / Requests</h2>
        {schedules.loading ? <p>loading...</p> : viewSchedule(schedules,{handleClose1,handleClose,handleClickOpen, open})}
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

function viewSchedule({ data }, {handleClose1,handleClose,handleClickOpen, open}) {
  if (!data) return;
  const schedulesParam = formatParam(data);
  
  if (data.length < 1) {
    return (
      <>
        <p
          className="new-dash-user-mentor-sch"
          style={{ marginTop: '3rem', marginBottom: '1rem' }}
        >
          <span>You currently Dont have a Schedule </span>
        </p>
        <a className="new-dash-schedule-link" href="#" onClick={handleClickOpen}>
          <i className="mdi mdi-plus lg-green-ic" /> Add Schedule
        </a>
        <Dialog open={open} onClose={handleClose1} >
          <center><DialogTitle id="">Add Schedule</DialogTitle></center>
          <AddSchedule close={handleClose}/>
        </Dialog>    

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
          pathname: '/dashboard/mentor/all-requests',
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

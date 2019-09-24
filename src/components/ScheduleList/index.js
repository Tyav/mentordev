import React, { useState } from 'react';
import axios from 'axios';
import { readCookie } from '../../helper/cookie';
import './ScheduleList.css';

export default function ScheduleList(props) {
  const [data, setData] = useState({
    message: 'Hi, add me to your schedule',
    schedule: props.id,
  });
  function handleRequest(e) {
    e.preventDefault();
    axios({
      url: `http://localhost:6060/api/v1/request/`,
      method: 'post',
      data,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${readCookie('mentordev_token')}`,
      },
    })
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {});
  }

  return (
    <div className="scheduleList">
      <form>
        <div className="mentorScheduleDetails">
          <p key={props.id}>
            <span>Day</span>
            {`${props.day}`}
            {/* <a href="#" className="new-dash-profile-link" onClick={handleRequest}>
          Request
        </a> */}
          </p>
          <p>
            <span>From</span>
            {props.from}
          </p>
          <p>
            <span>To</span>
            {props.to}
          </p>
        </div>
        <button onClick={handleRequest}>
          <i className="mdi mdi-send"></i>{' '}
          <span className="mentorMainDet">send request</span>
        </button>
      </form>
    </div>
  );
}
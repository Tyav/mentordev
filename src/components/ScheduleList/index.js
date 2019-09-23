import React, { useState } from 'react';
import axios from 'axios';
import { readCookie } from '../../helper/cookie';

export default function ScheduleList(props) {
  const [data, setData] = useState({
    message:"Hi, add me to your schedule", schedule: props.id
  })
  function handleRequest(e){
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
    <div>
    <form>
      <p key={props.id}>
        {`${props.day} ${props.from} - ${props.to}`}
        {/* <a href="#" className="new-dash-profile-link" onClick={handleRequest}>
          Request
        </a> */}
      </p>
      <button onClick={handleRequest}>send</button>
    </form>

    </div>
  );
}

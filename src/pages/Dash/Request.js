import React, { useState, useEffect } from 'react';
import UserDashHeading from '../../components/UserDashHeading';
import Card from '../../components/Card';
import SingleRequest from '../../components/SingleRequest';

import axios from 'axios';

function Request() {
  const token = localStorage.getItem('token');

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios({
      url: `http://localhost:6060/api/v1/request`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      response.data.payload.forEach(request => {
        if (request.status === 'Pending') {
          setRequests([request]);
        }
      });
    });
  }, []);

  const style = {
    width: '100%',
    background: '#fff',
    borderRadius: '4px',
    border: '1px solid #e6ecf5',
    padding: '20px',
    marginBottom: '20px',
  };
  return (
    <>
      <UserDashHeading text="Pending Requests" icon="message-alert" />
      <Card styles={style}>
        {requests.map(request => {
          return (
            <SingleRequest
              key={request._id}
              status={request.status}
              mentor={request.schedule.mentor.name}
              scheduleDay={request.schedule.day}
              fromTime={request.schedule.time.from}
              toTime={request.schedule.time.to}
              mentorTags={request.schedule.mentor.skills}
            />
          );
        })}
      </Card>
    </>
  );
}

export default Request;

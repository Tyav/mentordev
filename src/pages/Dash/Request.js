import React, { useState, useEffect } from 'react';
import UserDashHeading from '../../components/UserDashHeading';
import Card from '../../components/Card';
import SingleRequest from '../../components/SingleRequest';

import { sendGetRequest } from '../../actions';

function Request() {
  const token = localStorage.getItem('token');

  const [requests, setRequests] = useState([]);

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    sendGetRequest('/api/v1/request', headers).then(response => {
      let results = [];
      if (response.data.payload) {
        response.data.payload.forEach(request => {
          if (request.status === 'Pending') {
            results.push(request);
          }
        });
        setRequests(results);
        return;
      }
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
              requestId={request._id}
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

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import UserLatestConnect from '../UserLatestConnects';
import UserDashHeading from '../UserDashHeading';

/**
 * This component is for showing the list of schedule requests
 * image => the user's profile image
 * name => the user's name
 * email => the user's email
 * tags => the array of skills the user has
 * schedule => the schedule the meentee booked for this particular mentor
 * The list below should be converted to a single loop on db data
 */
function ScheduleRequests({ match }) {
  const { scheduleId } = match.params;
  const token = window.localStorage.getItem('token');
  const [requests, setRequests] = useState({ data: [], loading: true });

  useEffect(() => {
    getRequests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scheduleId]);

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };

  const getRequests = () => {
    return axios({
      method: 'GET',
      url: `http://localhost:6060/api/v1/schedule/${scheduleId}/requests`,
      headers
    })
      .then(response => {
        setRequests(() => ({ data: response.data.payload, loading: false }));
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <>
      <UserDashHeading text="Your most recent Requests" icon="checkbox-marked-circle-outline" />
      {requests.loading ? <p>loading...</p> : viewRequests(requests)}
    </>
  );
}

export default ScheduleRequests;

function viewRequests({ data }) {
  if (data.length < 1) {
    return <p>No request today</p>;
  }

  return (
    <div className="new-recent-mentor-list">
      {data.map((request, index) => (
        <UserLatestConnect
          image={request.mentee.avatar}
          name={request.mentee.name}
          email={request.mentee.email}
          tags={request.mentee.skills}
          schedule={`${request.schedule.day}  ${request.schedule.time.from} to ${
            request.schedule.time.to
          }`}
          key={index}
          buttons={['Approve', 'Reject']}
        />
      ))}
    </div>
  );
}

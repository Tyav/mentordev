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

  const requestApproval = e => {
    e.preventDefault();
    const token = window.localStorage.getItem('token');
    const requestId = e.target.id;
    const action =
      Array.from(e.target.classList)[1] === 'Approve' ? 'Approved' : 'Rejected';

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    };

    axios({
      method: 'PUT',
      url: `http://localhost:6060/api/v1/request/${requestId}?status=${action}`,
      headers
    })
      .then(response => {
        const newArray = requests.data.filter(
          request => request._id !== requestId
        );
        setRequests({ ...requests, data: newArray });
      })
      .catch(error => {
        console.log(error);
      });
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
      <UserDashHeading
        text="Your most recent Requests"
        icon="checkbox-marked-circle-outline"
      />
      {requests.loading ? (
        <p>loading...</p>
      ) : requests.data.length < 1 ? (
        <p>No request today</p>
      ) : (
        <div className="new-recent-mentor-list">
          {requests.data.map((request, index) => (
            <UserLatestConnect
              image={request.mentee.avatar}
              name={request.mentee.name}
              email={request.mentee.email}
              tags={request.mentee.skills}
              schedule={`${request.schedule.day}  ${
                request.schedule.time.from
              } to ${request.schedule.time.to}`}
              key={index}
              buttons={['Approve', 'Reject']}
              requestId={request._id}
              requestApproval={requestApproval}
            />
          ))}
        </div>
      )}
    </>
  );
}


export default ScheduleRequests;

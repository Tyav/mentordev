import React, { useState, useEffect } from 'react';
import axios from 'axios';

import UserLatestConnect from '../UserLatestConnects';
import UserDashHeading from '../UserDashHeading';
import { readCookie } from '../../helper/cookie'
// import viewRequests from '../ScheduleRequest';

/**
 * This component is for showing the list of schedule requests
 * image => the user's profile image
 * name => the user's name
 * email => the user's email
 * tags => the array of skills the user has
 * schedule => the schedule the meentee booked for this particular mentor
 * The list below should be converted to a single loop on db data
 */
function AllScheduleRequests({ location }) {
  const { scheduleIds } = location.state;
  const token = readCookie('mentordev_token');
  const [requests, setRequests] = useState({ data: [], loading: true });

  useEffect(() => {
    getAllRequests();
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [scheduleIds]);

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };
  
  
  const getAllRequests = () => {
    return axios({
      method: 'GET',
      url: `${process.env.REACT_APP_BACKEND_URL}/schedule/requests/?scheduleIds=${scheduleIds}`,
      headers
    })
    .then(response => {
      let data = response.data.payload.filter(info=> info.status === 'Pending')
      setRequests(() => ({ data: data, loading: false }));
    })
    .catch(error => {
      console.log(error);
    });
  };
  const requestApproval = e => {
    e.preventDefault();
    const requestId = e.target.id;
    const action = e.target.classList[1] === 'Approve' ? 'Approved' : 'Rejected';
  
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    };
  
    axios({
      method: 'PUT',
      url: `${process.env.REACT_APP_BACKEND_URL}/request/${requestId}?status=${action}`,
      headers
    })
      .then(response => {
        const newArray = requests.data.filter(
          request => request._id !== requestId
        );
        setRequests({ ...requests, data: newArray });
      })
      .catch(error => {
        
      });
  };
  return (
    <>
      <UserDashHeading text="All requests for your schedule" icon="checkbox-marked-circle-outline" />
      {requests.loading ? <p>loading...</p> : viewRequests(requests, requestApproval)}
    </>
  );
}

function viewRequests({ data },cb) {
  if (!data) return;
  if (data.length < 1) {
    return <center><p>No request today</p></center>;
  }
  
  return (
    <div className="new-recent-mentor-list">
      {data.map((request, index) => (
        <UserLatestConnect
          image={request.mentee.avatar}
          name={request.mentee.name}
          email={request.mentee.email}
          tags={request.mentee.skills}
          schedule={`${request.schedule.day}  ${
            request.schedule.time.from
          } to ${request.schedule.time.to}`}
          key={index}
          id={request._id}
          buttons={['Approve', 'Reject']}
          requestId={request._id}
          requestApproval={cb}
        />
      ))}
    </div>
  );
}

export default AllScheduleRequests;

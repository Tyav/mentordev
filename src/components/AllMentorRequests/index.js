import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { viewRequests } from '../UserLatestConnects';
import UserDashHeading from '../UserDashHeading';
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
  const token = window.localStorage.getItem('token');
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
      url: `http://localhost:6060/api/v1/schedule/requests/?scheduleIds=${scheduleIds}`,
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

export default AllScheduleRequests;

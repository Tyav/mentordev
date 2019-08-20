import React, { useEffect, useState } from 'react';
import axios from 'axios';

import MainComponent from '../MainComponent';
import MentorsProfileCard from '../MentorsProfileCard';

const RequestDashboard = () => {
  const token = window.localStorage.getItem('token');
  const [mentors, setMentors] = useState([]);
  useEffect(() => {
    getMentors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };

  const getMentors = () => {
    return axios({
      method: 'GET',
      url: `http://localhost:6060/api/v1/user`,
      headers
    })
      .then(response => {
        setMentors(response.data.payload);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <MainComponent>
      <MentorsProfileCard mentors={mentors} />
    </MainComponent>
  );
};

export default RequestDashboard;

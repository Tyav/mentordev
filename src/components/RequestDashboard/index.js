import React, { useEffect, useState } from 'react';
import axios from 'axios';

import MainComponent from '../MainComponent';
import MentorsProfileCard from '../MentorsProfileCard';
import styles from './RequestDashboard.module.css';

const RequestDashboard = () => {
  const [mentors, setMentors] = useState([]);
  useEffect(() => {
    getMentors();
  }, []);

  function getMentors() {
    axios
      .get('http://localhost:6060/api/v1/user')
      .then(response => {
        setMentors(response.data.payload);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <MainComponent>
      <MentorsProfileCard mentors={mentors} />
    </MainComponent>
  );
};

export default RequestDashboard;

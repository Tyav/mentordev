import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import Card from '../Card';

function TypeGraph(props) {
  const parentCardStyle = {
    display: 'flex',
    background: '#fff',
    padding: '10px',
    margin: '10px auto',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '98%',
    borderRadius: '4px',
    flexDirection: 'column',
    flex: '0 0 31%',
  };
  let data = {
    datasets: [
      {
        data: [props.mentorsamount, props.menteesamount],
        backgroundColor: ['#45cc89', '#edf2f6'],
      },
    ],
    labels: ['Mentors', 'Mentees'],
  };

  return (
    <Card styles={parentCardStyle}>
      <p className="admin-main-card-label">Mentors/Mentees Chart</p>
      <Doughnut data={data} width="40%" height="40%"></Doughnut>
    </Card>
  );
}

export default TypeGraph;

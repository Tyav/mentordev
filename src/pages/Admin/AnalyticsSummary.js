import React, { useState, useEffect } from 'react';

import AdminPageTitle from '../../components/AdminPageTitle';
import ActivitySummary from '../../components/ActivitySummary';
import TypeGraph from '../../components/TypeGraph';
import Table from '../../components/Table/table';
import Card from '../../components/Card';

import { sendGetRequest } from '../../actions';

function AnalyticsSummary() {
  const [users, setUsers] = useState([]);
  const mentors = users.filter(user => user.isMentor);
  const mentees = users.filter(user => !user.isMentor);

  useEffect(() => {
    sendGetRequest('/api/v1/user').then(response => {
      setUsers(response.data.payload);
    });
  }, []);

  const parentCardStyle = {
    display: 'flex',
    background: '#fff',
    padding: '10px 30px',
    margin: '10px auto 30px auto',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '98%',
    borderRadius: '4px',
    flexDirection: 'column',
    flex: '0 0 31%',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <main id="admin-main-page">
      <header className="admin-nav-header" />
      <AdminPageTitle title="Dashboard"></AdminPageTitle>
      <div className="admin-full-summary">
        <ActivitySummary
          usersamount={mentors.length}
          mentorsamount={mentors.length}
          menteesamount={mentees.length}
        ></ActivitySummary>
        <TypeGraph
          usersamount={mentors.length}
          mentorsamount={mentors.length}
          menteesamount={mentees.length}
        ></TypeGraph>
        <TypeGraph
          usersamount={mentors.length}
          mentorsamount={mentors.length}
          menteesamount={mentees.length}
        ></TypeGraph>
      </div>
      <Card styles={parentCardStyle}>
        <Table></Table>
      </Card>
    </main>
  );
}

export default AnalyticsSummary;

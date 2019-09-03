import React, { useState, useEffect } from 'react';

import AdminPageTitle from '../../components/AdminPageTitle';
import ActivitySummary from '../../components/ActivitySummary';
import TypeGraph from '../../components/TypeGraph';

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
    </main>
  );
}

export default AnalyticsSummary;

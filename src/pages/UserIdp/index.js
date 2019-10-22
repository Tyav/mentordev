import React from 'react';

//Styling
import './UserIdp.css';
import UserPlanTable from '../../components/UserPlanTable';
import UpcomingSchedule from '../../components/UpcomingSchedule';

function UserIdp() {
  return (
    <>
      <div className="user-filter-area">
        <button>+ Create New Plan</button>
      </div>
      <div className="user-existing-plan-area">
        <UserPlanTable />
        <UpcomingSchedule />
      </div>
    </>
  );
}

export default UserIdp;

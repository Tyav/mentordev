import React from 'react';
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
function ScheduleRequests({match}) {
  console.log(match.params.requestId);
  return (
    <>
      <UserDashHeading text="Your most recent Requests" icon="checkbox-marked-circle-outline" />
      <div className="new-recent-mentor-list">
        <UserLatestConnect
          image="/assets/img/frustrated.png"
          name="Bill Gates"
          email="bill@microsoft.com"
          tags={['.NET', 'C+']}
          schedule="Mondays 5:00 AM to 3:30 PM"
        />
      </div>
    </>
  );
}

export default ScheduleRequests;

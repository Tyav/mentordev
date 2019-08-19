import React from 'react';
import UserLatestConnect from '../UserLatestConnects';
import UserDashHeading from '../UserDashHeading';

/**
 * This component is for showing the list of recent connections
 * image => the user's profile image
 * name => the user's name
 * email => the user's email
 * tags => the array of skills the user has
 * schedule => the schedule the meentee booked for this particular mentor
 * The list below should be converted to a single loop on db data
 */
function UserConnects() {
  return (
    <>
      <UserDashHeading
        text="Your most recent Mentors"
        icon="checkbox-marked-circle-outline"
      />
      <div className="new-recent-mentor-list">
        <UserLatestConnect
          image="/assets/img/frustrated.png"
          name="Bill Gates"
          email="bill@microsoft.com"
          tags={['.NET', 'C+']}
          schedule="Mondays 5:00 AM to 3:30 PM"
        />
        <UserLatestConnect
          image="/assets/img/profile_three.jpg"
          name="Dan Abramov"
          email="dan@facebook.com"
          tags={['JavaScript', 'Node', 'ReactJS']}
          schedule="Fridays 6:30 AM to 3:30 PM"
        />
        <UserLatestConnect
          image="/assets/img/celebrate.png"
          name="Oke Tega"
          email="oketegah@gmail.com"
          tags={['PHP', 'JavaScript']}
          schedule="Fridays 1:25 AM to 5:30 AM"
        />
        <UserLatestConnect
          image="/assets/img/profile_three.jpg"
          name="Tolu Abramov"
          email="tolu@barcoss.com"
          tags={['JavaScript', 'Node', 'ReactJS']}
          schedule="Tuesdays 1:30 AM to 3:30 PM"
        />
      </div>
    </>
  );
}

export default UserConnects;

import React, { useContext } from 'react';
import { DashContext } from '../../Context/index';

function UpcomingSchedule() {
  const { user } = useContext(DashContext);

  return (
    <div className="user-plan-page-request-snippet">
      <p className="pHeadings">
        <img alt="schedule" src="/assets/img/punctuality.svg" />
        Upcoming Schedules
      </p>
      <div className="user-upcoming-area">
        {user
          ? user.contacts
            ? user.contacts.map(contact => (
                <div key={contact.id} className="user-upcoming-area-list">
                  <div className="user-single-upcoming">
                    <img src={contact.contact.avatar} alt="upcoming" />
                    <p>{`${contact.contact.name} - ${contact.schedule.time.from} to ${contact.schedule.time.to}`}</p>
                  </div>
                </div>
              ))
            : null
          : null}
      </div>
    </div>
  );
}

export default UpcomingSchedule;

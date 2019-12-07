import React from 'react';

function UserAppointment({ days }) {
  return days.map((day, i) => {
    return (
      <div className="schedule-day-heading">
        <p style={{ borderBottom: `3px solid ${day.color}` }} key={i}>
          {day.day} <span>{day.count}</span>
        </p>
        {day.appointments.length ? (
          day.appointments.map(appointment => (
            <>
              <p className="user-single-appointment">
                {appointment.time.from} - {appointment.time.to}
              </p>
            </>
          ))
        ) : (
          <p className="user-single-appointment">None</p>
        )}
      </div>
    );
  });
}

export default UserAppointment;

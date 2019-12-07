import React from 'react';

function UserDashSingleRequest({
  status,
  mentor,
  scheduleDay,
  fromTime,
  toTime,
  requestId,
  deleteRequestHandler,
  cancelRequestHandler,
}) {
  return (
    <div
      className={`single-user-mentee-request ${
        status === 'Pending'
          ? 'pending-request'
          : status === 'Cancelled'
          ? 'cancelled-request'
          : 'approved-request'
      }`}
    >
      <p>
        <span>Status:</span> {status}
      </p>
      <p>
        <span>Mentor:</span> {mentor}
      </p>
      <p>
        <span>Day:</span> {scheduleDay}
      </p>
      <p>
        <span>From:</span> {fromTime} - {toTime}
      </p>
      {status === 'Pending' ? (
        <button
          onClick={e => {
            e.preventDefault();
            cancelRequestHandler(requestId);
          }}
        >
          <i className="mdi mdi-close"></i> Cancel request
        </button>
      ) : null}
    </div>
  );
}

export default UserDashSingleRequest;

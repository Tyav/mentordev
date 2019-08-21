import React from 'react';

import Tag from '../Tag';

function SingleRequest(props) {
  return (
    <>
      <div className="mentee-request">
        <div className="single-mentee-request">
          <p className="request-pending">
            <span>Status</span>: {props.status} &nbsp;
          </p>
          <p className="request-mentor">
            &nbsp;<span>Mentor</span>: {props.mentor} &nbsp;
          </p>
          <p className="request-schedule">
            &nbsp; <span>For</span> {props.scheduleDay}, <span>From</span>{' '}
            {props.fromTime} <span>To</span> {props.toTime} &nbsp;
          </p>
          <p className="request-tags">
            &nbsp;
            {props.mentorTags.map(tag => {
              return <Tag tagname={tag} />;
            })}
          </p>
        </div>
        <br />
        <a href="/">Cancle Request</a>
      </div>
    </>
  );
}

export default SingleRequest;

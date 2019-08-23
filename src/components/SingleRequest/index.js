import React from 'react';

import { sendPutRequest } from '../../actions';

import Tag from '../Tag';

function SingleRequest(props) {
  const cancleRequestHandler = e => {
    e.preventDefault();
    sendPutRequest(`/api/v1/request/${props.requestId}?status=Cancelled`);
  };
  return (
    <>
      <div className="mentee-request">
        <div className="single-mentee-request">
          <p className="request-pending">{props.status} &nbsp;</p>
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
          <a href="/">
            <i
              className="mdi mdi-close-circle"
              onClick={cancleRequestHandler}
            />
          </a>
        </div>
        <br />
      </div>
    </>
  );
}

export default SingleRequest;

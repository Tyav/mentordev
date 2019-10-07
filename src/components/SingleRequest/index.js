import React from 'react';

import { sendPutRequest } from '../../actions';

import Tag from '../Tag';

function SingleRequest(props) {
  const cancelRequestHandler = e => {
    e.preventDefault();
    sendPutRequest(`/request/${props.requestId}?status=Cancelled`);
  };
  
  return (
    <>
      <div className="mentee-request">
        <div className="single-mentee-request">
          <p className="request-pending" >{props.status} &nbsp;</p>
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
          {((props.status === 'Pending') && <a href="/">
            <i
              className="mdi mdi-close-circle"
              onClick={(e)=> {e.preventDefault(); props.cancelRequestHandler(props.requestId)}}
            />
          </a>) || ((props.status !== 'Pending') && <a href="/">
            <i
              className="mdi mdi-delete"
              onClick={(e)=> {e.preventDefault(); props.deleteRequestHandler(props.requestId)}}
            />
          </a>) }
        </div>
        <br />
      </div>
    </>
  );
}

export default SingleRequest;

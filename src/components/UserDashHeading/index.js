import React from 'react';

function UserDashHeading(props) {
  return (
    <h1 className="new-dash-section-title">
      <i className={`mdi mdi-${props.icon}`} />
      <br />
      {props.text}
    </h1>
  );
}

export default UserDashHeading;

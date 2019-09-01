import React from 'react';

function UserDashHeading(props) {
  return (
    <>
    <h1 className="new-dash-section-title"><span>
      <i className={`mdi mdi-${props.icon}`} />
      <br />
      {props.text}</span>
    {props.add && (
        <i 
          className="mdi mdi-plus-circle" 
          style={{float: 'right'}}
          onClick={props.add}
        />
      )}
    </h1>
    </>
  );
}

export default UserDashHeading;

import React from 'react';

/**
 * This component is for showing a single contact
 */

function UserSingleContact(props) {
  return (
    <div className="new-dash-single-contact">
      <img src={props.image} alt={props.name} />
      <p>
        {props.name}
        <br /> <span>{props.email}</span>
      </p>
    </div>
  );
}

export default UserSingleContact;

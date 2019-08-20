import React from 'react';

/**
 * This component is for showing a single contact
 */

function UserSingleContact(props) {
  return (
    <div className="new-dash-single-contact-container">
      <img
        className="new-dash-contact-img"
        src={props.image}
        alt={props.name}
      />
      <div className="new-dash-single-contact">
        <p>
          {props.name}{' '}
            <i
              className="mdi mdi-dots-vertical"
              id="contact-toggle"
              onClick={toggleDelete}
            >
              <div onClick={deleteContactHandler}>
                <i className="mdi mdi-delete" />
                <br />
                Delete Contact
              </div>
            </i>
            <br /> <span>{props.email}</span>
            <br /> <span className="schedule">{props.schedule}</span>
          </p>
        </div>
      </div>
  );
}

export default UserSingleContact;

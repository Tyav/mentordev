import React, { useState } from 'react';
import axios from 'axios';

/**
 * This component is for showing a single contact
 */

function UserSingleContact(props) {
  const token = localStorage.getItem('token');
  const [deleteContact, setDeleteContact] = useState({
    status: false,
    message: ''
  });

  const deleteContactHandler = () => {
    const contactId = props.contactId;
    axios({
      url: `${process.env.REACT_APP_BACKEND_URL}/contact/${contactId}`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      if (response.data.statusCode === 200) {
        setDeleteContact({ status: true, message: 'Contact Deleted' });
      }
    });
  };

  const toggleDelete = e => {
    const deleteBar = e.target.firstElementChild;
    if (deleteBar.classList.contains('unhide')) {
      deleteBar.classList.remove('unhide');
      return;
    } else {
      deleteBar.classList.add('unhide');
      return;
    }
  };

  return (
    <>
      {deleteContact.status ? (
        <p className="contact-deleted">
          <i className="mdi mdi-checkbox-marked-circle-outline" /> {deleteContact.message}
        </p>
      ) : (
        ''
      )}
      <div className="new-dash-single-contact-container">
        <img className="new-dash-contact-img" src={props.image} alt={props.name} />
        <div className="new-dash-single-contact">
          <p>
            {props.name}{' '}
            <i className="mdi mdi-dots-vertical" id="contact-toggle" onClick={toggleDelete}>
              <div onClick={deleteContactHandler}>
                <i className="mdi mdi-delete" />
                <br />
                Delete Contact
              </div>
            </i>
            <br /> <span>{props.email}</span>
            {props.schedule}
          </p>
        </div>
      </div>
    </>
  );
}

export default UserSingleContact;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { readCookie } from '../../helper/cookie';

function UserDashContactList() {
  const [contacts, setContacts] = useState([]);
  const token = readCookie('mentordev_token');

  useEffect(() => {
    async function fetchData() {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/contact`,
          config,
        );
        setContacts([...response.data.payload]);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, token);

  return (
    <aside className="user-dash-contact-list">
      {contacts.length ? (
        contacts.map(contact => {
          const { contact: user, schedule } = contact;
          return (
            <div key={contact.id} className="user-dash-single-contact">
              <img alt="profile" src={`${user.avatar}`} />
              <div className="single-user-detail">
                <p className="single-user-detail-name">
                  {user.name} <i className="mdi mdi-dots-vertical"></i>
                </p>
                <p className="single-user-detail-email">
                  <img alt="email" src="/assets/img/email.svg" /> &nbsp;
                  {user.email}
                </p>
                <p className="single-user-detail-schedule">
                  <img alt="time" src="/assets/img/clock.svg" />
                  &nbsp;{' '}
                  {`${schedule.day} ${schedule.time.from} - ${schedule.time.to}}`}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <p className="no-details-to-show">Connect to have Contacts</p>
      )}
    </aside>
  );
}

export default UserDashContactList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import UserSingleContact from '../UserSingleContact';
import { readCookie } from '../../helper/cookie';

/**
 * This component is for showing a user's contact list
 */

function UserContactList() {
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
  }, [token]);

  return (
    <div className="new-dash-contact">
      {contacts.map(contact => {
        const { contact: user, schedule } = contact;
        return (
          <UserSingleContact
            key={contact.id}
            contactId={contact.id}
            image={user.avatar}
            name={user.name}
            email={user.email}
            schedule={
              <span style={{ color: '#47505e' }}>
                <br />
                {`Day : ${schedule.day}`}
                <br />
                {`From: ${schedule.time.from}`}
                {/* <input
                  type="time"
                  value={schedule.time.from}
                  disabled
                  style={timeStyle}
                /> */}
                {` To: ${schedule.time.to}`}
                {/* <input
                  type="time"
                  value={schedule.time.to}
                  disabled
                  style={timeStyle}
                /> */}
              </span>
            }
          />
        );
      })}
    </div>
  );
}

export default UserContactList;

let timeStyle = {
  width: '81px',
  border: 'none',
  fontFamily: 'fantasy',
  fontSize: '11px',
  color: 'black',
};

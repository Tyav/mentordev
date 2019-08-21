import React, { useState, useEffect } from 'react';
import axios from 'axios';

import UserSingleContact from '../UserSingleContact';

/**
 * This component is for showing a user's contact list
 */

function UserContactList() {
  const [contacts, setContacts] = useState([]);
  const token = localStorage.getItem('token');

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
          'http://localhost:6060/api/v1/contact',
          config,
        );
        setContacts([...response.data.payload]);
      } catch (error) {}
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
            schedule={<span>
                    {schedule.day} {schedule.time.from} to {schedule.time.to}
                  </span>}
          />
        );
      })}
    </div>
  );
}

export default UserContactList;

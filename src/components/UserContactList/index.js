import React from 'react';

import UserSingleContact from '../UserSingleContact';

/**
 * This component is for showing a user's contact list
 */

function UserContactList() {
  return (
    <div className="new-dash-contact">
      <UserSingleContact
        image="/assets/img/email-sent.svg"
        name="Brendan Eiche"
        email="brendan@javascript.com"
        schedule="Mondays 5:00 AM to 3:30 PM"
      />
      <UserSingleContact
        image="/assets/img/mentee.svg"
        name="Tolu Adesina"
        email="toluadesina59@gmail.com"
        schedule="Mondays 5:00 AM to 3:30 PM"
      />
      <UserSingleContact
        image="/assets/img/workflow.png"
        name="Ibrahim Joseph"
        email="joe@zo.com"
        schedule="Mondays 5:00 AM to 3:30 PM"
      />
      <UserSingleContact
        image="/assets/img/mentorDev.svg"
        name="Izu Eiche"
        email="izu@kaba.com"
        schedule="Mondays 5:00 AM to 3:30 PM"
      />
    </div>
  );
}

export default UserContactList;

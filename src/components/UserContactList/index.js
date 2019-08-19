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
      />
      <UserSingleContact
        image="/assets/img/mentee.svg"
        name="Tolu Adesina"
        email="toluadesina59@gmail.com"
      />
      <UserSingleContact
        image="/assets/img/workflow.png"
        name="Ibrahim Joseph"
        email="joe@zo.com"
      />
      <UserSingleContact
        image="/assets/img/mentorDev.svg"
        name="Izu Eiche"
        email="izu@kaba.com"
      />
    </div>
  );
}

export default UserContactList;

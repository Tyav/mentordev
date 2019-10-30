import React from 'react';

function UserDashContentHeader({ onclick }) {
  return (
    <header className="user-dash-content-header">
      <button className="user-dash-contact-toggle" onClick={onclick}>
        <img alt="menu toggler" src="/assets/img/menu.svg" />
        <span>Contacts</span>&nbsp;
        <img alt="menu toggler" src="/assets/img/contact.svg" />
      </button>
    </header>
  );
}

export default UserDashContentHeader;

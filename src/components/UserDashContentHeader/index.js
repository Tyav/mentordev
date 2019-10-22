import React from 'react';

function UserDashContentHeader() {
  return (
    <header className="user-dash-content-header">
      <div className="user-dash-contact-toggle">
        <img alt="menu toggler" src="/assets/img/menu.svg" />
        <span>Contacts</span>&nbsp;
        <img alt="menu toggler" src="/assets/img/contact.svg" />
      </div>
    </header>
  );
}

export default UserDashContentHeader;

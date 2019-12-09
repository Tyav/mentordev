import React from 'react';

function UserDashContentHeader({ onclick }) {
  const [toggle, setToggle] = React.useState(true);
  function handleNavToggle(e) {
    e.preventDefault();
    setToggle(!toggle);

    const sideNav = document.querySelector('.user-dash-header');
    const content = document.querySelector('.user-dash-content');

    if (!toggle) {
      sideNav.classList.add('hide-side-nav');
      content.classList.add('expand-content');
    } else {
      sideNav.classList.remove('hide-side-nav');
      content.classList.remove('expand-content');
    }
  }
  return (
    <header className="user-dash-content-header">
      <img
        alt="menu toggler"
        src="/assets/img/menu.svg"
        className="desktop-toggle"
        onClick={handleNavToggle}
      />
      <button className="user-dash-contact-toggle" onClick={onclick}>
        <img alt="menu toggler" src="/assets/img/menu.svg" />
        <span>Contacts</span>&nbsp;
        <img alt="menu toggler" src="/assets/img/contact.svg" />
      </button>
    </header>
  );
}

export default UserDashContentHeader;

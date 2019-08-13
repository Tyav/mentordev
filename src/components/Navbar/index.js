import React from 'react';
import Button from '../Button';

import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar(props) {
  return (
    <nav id="navbar">
      <div className="navTog">
        <img src="/assets/img/logo.png" alt="logo" />
      </div>
      <div className="navLogo">
        <a className="navLogo" href="/">
          Mentor />ev
        </a>
      </div>
      <div className="navLinks">
        <Link to="/login">
          {props.text ? (
            <Button className="btn-success-outline" text="Login" />
          ) : (
            ''
          )}
        </Link>
        <Link to={!props.link ? '/about' : props.link}>
          {!props.text ? (
            'About MentorDev'
          ) : (
            <Button className="btn-success-solid" text={props.text} />
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

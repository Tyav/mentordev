import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import AboutHeader from '../../components/AboutHeader';
import { readCookie } from '../../helper/cookie'
function MainAbout() {
  const token = readCookie('mentordev_token');
  if (token) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <>
      <Navbar></Navbar>
      <AboutHeader imagePath="/assets/img/mentors.jpg" />
      {/* <nav className="main-about-nav">
        <div className="main-about-nav-logo">
          <img src="/assets/img/logo.png" alt="logo" />
          <p>Mentor />ev</p>
        </div> */}
      {/* <div className="main-about-nav-buttons">
        <Button className="btn-success-outline" text="Login" />
        <Button className="btn-success-solid" text="Register" />
      </div> */}
      {/* </nav> */}
      {/* <div className="main-about-card">
        <div className="main-about-side-content">
          <h1>
            Mentor a <br />
            <span>/>eveloper</span>
          </h1>
          <p>
            Trainee students find and connect with Willing Mentors for
            mentorship relationships.
            <br />
            <Link to="/register">
              <Button className="btn-success-solid" text="Get Started" />
            </Link>
            {'       '}
            <Link to="/login">
              <Button className="btn-success-solid" text="Login" />
            </Link>
          </p>
        </div>
        <div className="main-about-card-img">
          <img src="/assets/img/frustrated.png" alt="mentee" />
        </div>
      </div> */}
      '
      <div className="main-about-card">
        <h1 className="about-main-h1">How it Works</h1>
        <div className="main-about-sm-card-area">
          <div className="main-about-sm-card">
            <i className="mdi mdi-school" />
            <p>
              Mentors register on the platform and create scheduled time for
              when they would be available.
              <br />
              <Link to="/register">Mentor a />ev</Link>
            </p>
          </div>
          <div className="main-about-sm-card">
            <i className="mdi mdi-account" />
            <p>
              Mentees register and book opened mentors slots that would be
              approved by the mentor.
              <br />
              <Link to="/register">Get a />ev mentor</Link>
            </p>
          </div>
          <div className="main-about-sm-card">
            <i className="mdi mdi-finance" />
            <p>
              Watch yourself grow as a developer. Reduce mistakes and grow
              faster.
              <br />
              <Link to="/register">Get started</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="main-about-card white">
        <div className="main-about-side-content">
          <h1>
            Find a <br />
            <span>Mentor</span>
          </h1>
          <p>
            Trainee students find and connect with Willing mentors for
            mentorship relationships.
            <br />
            <Link to="/register">
              <Button className="btn-success-solid" text="Get a Mentor" />
            </Link>
          </p>
        </div>
        <div className="main-about-card-img">
          <img
            src="/assets/img/menteeimg.jpg"
            alt="celebrate with your mentor"
          />
        </div>
      </div>
      <div className="main-about-card">
        <div className="main-about-side-content">
          <h1>Easy-to-use</h1>
          <p>
            We created an easy to use platform for both mentors and mentees to
            connect
          </p>
          <br />
          <br />
          <span className="about-devices">
            <i className="mdi mdi-cellphone" /> Mobile
          </span>
          <span className="about-devices">
            <i className="mdi mdi-monitor" /> Desktop
          </span>
        </div>
      </div>
      <footer className="main-about-footer">
        Copyright &copy; Mentor />ev 2019. All rights reserved
      </footer>
    </>
  );
}

export default MainAbout;

import React, { useState, useEffect } from 'react';

import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

import { Link, Redirect } from 'react-router-dom';

//Stylings
import './About.css';

function About() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const auth = localStorage.getItem('auth');
    if (auth) {
      setAuth(true);
    }
  }, [auth]);
  if (auth) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <>
      <Navbar link="/register" text="Register" />
      <header className="aboutHeader">
        <div className="aboutDescription">
          <article>
            <h1>
              Mentor a <span>/>eveloper</span>
            </h1>
            <p>
              Trainee students find and connect with Willing <br />
              mentors for mentorship relationships.
            </p>
            <Link to="/register">
              <Button className="btn-success-solid" text="Get Started" />
            </Link>
          </article>
        </div>
        <div className="aboutImg">
          <img alt="mentor a developer" src="/assets/img/mentorDev.svg" />
        </div>
      </header>
      <div className="menteeDescription">
        <div className="aboutImg">
          <img alt="mentor a developer" src="/assets/img/mentee.svg" />
        </div>
        <div className="aboutDescription">
          <article>
            <h1>
              Get a <span>{`Mentor`}</span>
            </h1>
            <p>
              Trainee students find and connect with Willing <br />
              mentors for mentorship relationships.
            </p>
            <Link to="/register">
              <Button className="btn-success-solid" text="Get Started" />
            </Link>
          </article>
        </div>
      </div>
      <div className="callToAction" />
      <Footer />
    </>
  );
}

export default About;

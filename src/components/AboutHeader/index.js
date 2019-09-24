import React from 'react';
import { Link } from 'react-router-dom';

//Components
import Button from '../Button';

//Css
import './AboutHeader.css';

function AboutHeader(props) {
  return (
    <header className="new-about-header">
      <div className="new-header-dim"></div>
      <div
        className="new-about-image-area"
        style={{
          backgroundImage: `url(${props.imagePath})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="new-header-textarea">
          <p>Get Mentored by a World Class Developer</p>
          <div className="new-header-buttonarea">
            <p>
              <Link to="/register">
                <Button
                  text="Get Started"
                  className="btn-success-solid"
                ></Button>
              </Link>
              &nbsp; OR &nbsp;
              <Link to="/mentorapplication">
                <Button
                  text="Become a Mentor"
                  className="btn-success-outline"
                ></Button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AboutHeader;

import React from 'react';
import Tags from '../Tag/index';
import '../MentorsProfileCard/MentorsProfile.css';
import Tag from '../Tag/index';

function MentorCard({ mentors }) {
  return (
    <div className="mentor-card-div">
      {mentors.map((mentor, key) => (
        <div className="mentors-image-cards helloagain" key={key}>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={mentor.avatar} alt="Avatar" style={{ width: '300px', height: '300px' }} />
              </div>
              <div className="flip-card-back">
                <h1>{mentor.name}</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
            {/* <button>menotr date and time</button> */}
            <Tag tagname={'date:time'} style={{ background: 'red' }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MentorCard;

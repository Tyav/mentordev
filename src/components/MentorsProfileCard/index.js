import React from 'react';
import Tags from '../Tag/index';
import '../MentorsProfileCard/MentorsProfile.css';
import Tag from '../Tag/index';

function MentorCard(props) {
  return (
    <div className="mentor-card-div">
      <div className="mentors-image-cards helloagain">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2DlYPgsKtTHvK9_PmvF_QfZMw8erqJxI7gzMU6ozLxW14CRa"
                alt="Avatar"
                style={{ width: '300px', height: '300px' }}
              />
            </div>
            <div className="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
          {/* <button>menotr date and time</button> */}
          <Tag tagname={'date:time'} style={{ background: 'red' }} />
        </div>
      </div>
    </div>
  );
}

export default MentorCard;

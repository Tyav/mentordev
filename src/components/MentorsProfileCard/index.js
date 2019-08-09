import React from 'react';
import '../MentorsProfileCard/MentorsProfile.css';

function MentorCard(props) {
  return (
    <div class="mentors-image-cards">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2DlYPgsKtTHvK9_PmvF_QfZMw8erqJxI7gzMU6ozLxW14CRa"
              alt="Avatar"
              style="width:300px;height:300px;"
            />
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
        <button>menotr date and time</button>
      </div>
    </div>
  );
}

export default MentorCard;

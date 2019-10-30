import React, { useState } from 'react';

//Dependencies
import axios from 'axios';

//Styling
import './MentorIdp.css';
import UserPlanTable from '../../components/UserPlanTable';

function MentorIdp() {
  const [mentorComment, setMentorComment] = useState({
    comment: '',
  });

  const mentorCommentHandler = e => {
    e.preventDefault();
    axios({});
  };

  const mentroChangeHandler = e => {
    setMentorComment({ ...mentorComment, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="user-mentor-idp-view">
        <p></p>
        <UserPlanTable
          showActions={false}
          heading="Your Mentees' IDP"
          isTitle={false}
          data={[
            { id: '978677567', name: 'Tolu Adesina' },
            { id: '778787878', name: 'Adedayo Segun' },
          ]}
          isLink={true}
        />
        <div className="mentor-mentee-plan-display">
          <div className="mentee-plan-details">
            <p className="noLeftBorder">Tolu Adesina Development Plan</p>
            <div className="mentee-plan-detail">
              <p className="mentee-plan-detail-head">Goal</p>
              <p>
                I want to learn to code with Javascript and also build products
                with it with this short period of time
              </p>
              <p className="mentee-plan-detail-head">Anticipated Outcome</p>
              <p>
                I want to learn to code with Javascript and also build products
                with it with this short period of time
              </p>
              <p className="mentee-plan-detail-head">
                Expected Time of Completion
              </p>
              <p>10/11/2020</p>
            </div>
          </div>
          <div className="mentor-plan-comment">
            <p className="noLeftBorder">Your Comment</p>
            <form>
              <textarea
                placeholder="Place a comment for this mentee"
                name="comment"
                onChange={mentroChangeHandler}
              ></textarea>
              <button onClick={mentorCommentHandler}>Comment</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default MentorIdp;

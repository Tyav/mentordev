import React, { useState, useContext } from 'react';

//Dependencies
import axios from 'axios';

//Context
import { DashContext } from '../../Context';

//Styling
import './MentorIdp.css';
import UserPlanTable from '../../components/UserPlanTable';
import UserMenteeIdp from '../../components/UserMenteeIdp';

function MentorIdp(props) {
  const { menteeIdpId } = props;
  const [mentorComment, setMentorComment] = useState({
    comment: '',
  });

  const [contacts, setContacts] = useState([]);
  const { user } = useContext(DashContext);

  React.useEffect(() => {
    setContacts(user.contacts);
  }, [user]);

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
        <UserPlanTable
          showActions={false}
          heading="Your Mentees' IDP"
          isTitle={false}
          data={contacts}
          isLink={true}
        />
        <div className="mentor-mentee-plan-display">
          <UserMenteeIdp idpId={menteeIdpId} />
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

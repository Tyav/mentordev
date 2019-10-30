import React from 'react';

//Components
import UserDashFilterFunc from '../../components/UserDashFilterFunc';
import UserDashSingleCard from '../../components/UserDashSingleCard';

//Styling
import './MentorRequest.css';

function MentorRequest() {
  return (
    <>
      <div className="new-mentor-request">
        <UserDashFilterFunc />
        <section>
          <UserDashSingleCard
            username="OKE TEGA"
            briefDescription="I am an aspiring Sofware Engineer from Lagos, Nigeria"
            email="oketegah@gmail.com"
            location="Lagos, Nigeria"
            stacks={['PHP', 'Javascript']}
            coverImage="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1567&amp;q=80"
            profileImage="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1567&amp;q=80"
          />
        </section>
      </div>
    </>
  );
}

export default MentorRequest;

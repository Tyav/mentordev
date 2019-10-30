import React from 'react';

//Styling
import './UserIdp.css';
import UserPlanTable from '../../components/UserPlanTable';
import UpcomingSchedule from '../../components/UpcomingSchedule';
import IdpEditor from '../../components/IdpEditor';
import MentorIdp from '../MentorIdp';
import { readCookie } from '../../helper/cookie';

function UserIdp() {
  const validateType = readCookie('validateType');

  const IdpEditorToggleHandler = e => {
    e.preventDefault();
    const editor = document.querySelector('.editor-area');
    editor.classList.add('show');
  };

  return (
    <>
      {!validateType ? (
        <>
          <div className="editor-area">
            <IdpEditor />
          </div>
          <div className="user-filter-area">
            <button onClick={IdpEditorToggleHandler}>+ Create New Plan</button>
          </div>
          <div className="user-existing-plan-area">
            <UserPlanTable
              heading="Existing Plans"
              isTitle={true}
              showActions={true}
              data={[{ title: 'Mr Adeleke Mentorship Plan' }]}
              isLink={false}
            />
            <UpcomingSchedule />
          </div>
        </>
      ) : (
        <MentorIdp />
      )}
    </>
  );
}

export default UserIdp;

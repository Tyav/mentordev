import React, { useState, useEffect } from 'react';

//Styling
import './UserIdp.css';

//Components
import UserPlanTable from '../../components/UserPlanTable';
import UpcomingSchedule from '../../components/UpcomingSchedule';
import IdpEditor from '../../components/IdpEditor';

//Helpers
import MentorIdp from '../MentorIdp';
import { readCookie } from '../../helper/cookie';
import { sendGetRequest } from '../../actions';

function UserIdp() {
  const validateType = readCookie('validateType');

  const [idps, setIdps] = useState([]);
  const [fetchIdps, setFetchIpds] = useState(false);
  const [idpData, setIdpData] = useState([]);
  const [rowType, setRowType] = useState({ showActions: false, isLink: true });

  const IdpEditorToggleHandler = e => {
    e.preventDefault();
    const editor = document.querySelector('.editor-area');
    editor.classList.add('show');
  };

  useEffect(() => {
    sendGetRequest('/idp').then(response => {
      setIdps(response.data.payload);
      setIdpData(response.data.payload.filter(idp => idp.isTied));
    });
  }, [fetchIdps]);

  function filterTiedHandler(e) {
    e.target.classList.add('active');
    e.target.nextElementSibling.classList.remove('active');
    setIdpData(idps.filter(idp => idp.isTied));
    setRowType({ showActions: false, isLink: true });
  }
  function filterDraftHandler(e) {
    e.target.classList.add('active');
    e.target.previousElementSibling.classList.remove('active');
    setIdpData(idps.filter(idp => !idp.isTied));
    setRowType({ showActions: true, isLink: false });
  }

  return (
    <>
      {!validateType ? (
        <>
          <div className="editor-area">
            <IdpEditor fetchIdps={setFetchIpds} />
          </div>
          <div className="user-filter-area">
            <button onClick={IdpEditorToggleHandler}>+ Create New Plan</button>
          </div>
          <div className="user-existing-plan-area">
            <UserPlanTable
              heading="Existing Plans"
              isTitle={true}
              showActions={rowType.showActions}
              data={idpData}
              isLink={rowType.isLink}
              filterTied={filterTiedHandler}
              filterDraft={filterDraftHandler}
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

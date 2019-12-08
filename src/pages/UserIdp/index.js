import React, { useState, useContext, useEffect } from 'react';

//Styling
import './UserIdp.css';

//Components
import UserPlanTable from '../../components/UserPlanTable';
import UpcomingSchedule from '../../components/UpcomingSchedule';
import IdpEditor from '../../components/IdpEditor';

//Context
import { DashContext } from '../../Context';

//Helpers
import MentorIdp from '../MentorIdp';
import { readCookie } from '../../helper/cookie';
import { sendGetRequest } from '../../actions';

function UserIdp(props) {
  const validateType = readCookie('validateType');

  const { user } = useContext(DashContext);

  const [idps, setIdps] = useState([]);
  const [fetchIdps, setFetchIpds] = useState(false);
  const [idpData, setIdpData] = useState([]);
  const [rowType, setRowType] = useState({ showActions: false, isLink: true });
  const [idpId, setIdpId] = useState('');

  useEffect(() => {
    setIdpId(props.match.params.idpId);
  }, [props.match.param]);

  const IdpEditorToggleHandler = e => {
    e.preventDefault();
    const editor = document.querySelector('.editor-area');
    editor.classList.add('show');
  };

  useEffect(() => {
    sendGetRequest('/idp')
      .then(response => {
        setIdps(response.data.payload);
        setIdpData(response.data.payload.filter(idp => idp.isTied));
      })
      .catch(error => {});
  }, [fetchIdps, user]);

  function filterTiedHandler(e) {
    try {
      if (idps) {
        e.target.classList.add('active');
        e.target.nextElementSibling.classList.remove('active');
        setIdpData(idps.filter(idp => idp.isTied));
        setRowType({ showActions: false, isLink: true });
      }
    } catch (error) {}
  }

  function filterDraftHandler(e) {
    try {
      e.target.classList.add('active');
      e.target.previousElementSibling.classList.remove('active');
      setIdpData(idps.filter(idp => !idp.isTied));
      setRowType({ showActions: true, isLink: false });
    } catch (error) {}
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
              showTableHead={validateType ? false : true}
            />
            <UpcomingSchedule />
          </div>
        </>
      ) : (
        <MentorIdp menteeIdpId={idpId} />
      )}
    </>
  );
}

export default UserIdp;

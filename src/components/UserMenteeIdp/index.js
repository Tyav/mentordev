import React from 'react';
import { withRouter } from 'react-router-dom';

//Context
import { DashContext } from '../../Context';

function UserMenteeIdp(props) {
  const { idpId } = props;
  const { user } = React.useContext(DashContext);
  const [userIdp, setUserIdp] = React.useState({ loading: true });

  React.useLayoutEffect(() => {
    try {
      let contact = user.contacts.filter(item => item.id === idpId)[0];
      let contactDate = new Date(contact.idp.deadline);
      let transFormedDate = `${contactDate.getDay()}/${contactDate.getMonth()}/${contactDate.getFullYear()}`;
      contact.idp.deadline = transFormedDate;
      setUserIdp({ loadind: false, idp: contact.idp });
    } catch (error) {}
  }, [idpId, props.match.params.idpId, user]);

  function renderIdp() {
    if (!userIdp.loading) {
      const goal = document.querySelector('.idp-goal');
      const outcome = document.querySelector('.idp-outcome');
      const completion = document.querySelector('.idp-completion');

      goal.innerHTML = userIdp.idp.goal;
      outcome.innerHTML = userIdp.idp.outcome;
      completion.innerHTML = userIdp.idp.deadline;
    }
  }

  React.useEffect(() => {
    renderIdp();
  }, [userIdp]);

  return (
    <div className="mentee-plan-details">
      {!userIdp.loading ? (
        <>
          <p className="noLeftBorder">Tolu Adesina Development Plan</p>
          <div className="mentee-plan-detail">
            <p className="mentee-plan-detail-head">Goal</p>
            <p className="idp-goal">Plan Goal</p>
            <p className="mentee-plan-detail-head">Anticipated Outcome</p>
            <p className="idp-outcome">Plan Outcome</p>
            <p className="mentee-plan-detail-head">
              Expected Time of Completion
            </p>
            <p className="idp-completion">Plan Date of completion</p>
          </div>
        </>
      ) : (
        <p>Select a mentee to view development plan</p>
      )}
    </div>
  );
}

export default withRouter(UserMenteeIdp);

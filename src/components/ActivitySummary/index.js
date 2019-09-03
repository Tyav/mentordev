import React from 'react';

import Card from '../Card';

function ActivitySummary(props) {
  const parentCardStyle = {
    display: 'flex',
    background: '#fff',
    padding: '10px',
    margin: '10px auto',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '98%',
    borderRadius: '4px',
    flexDirection: 'column',
    flex: '0 0 31%',
  };
  const userSummaryStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '10px 0',
  };

  const singleSummaryStyle = {
    boxShadow: '0px 1px 15px 1px rgba(69, 65, 78, 0.06)',
    flex: '0 0 40%',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    background: '#fff',
  };

  return (
    <Card styles={parentCardStyle}>
      <p className="admin-main-card-label">Users Summary</p>

      <Card styles={userSummaryStyle}>
        <Card styles={singleSummaryStyle}>
          <img className="summaryCardImg" src="/assets/img/users.svg"></img>
          <p className="adminSummaryTitle">Users</p>
          <p className="adminSummaryCount">
            {props.usersamount} users in total
          </p>
        </Card>
        <Card styles={singleSummaryStyle}>
          <img className="summaryCardImg" src="/assets/img/contacts.svg"></img>
          <p className="adminSummaryTitle">Contacts</p>
        </Card>
      </Card>
      <Card styles={userSummaryStyle}>
        <Card styles={singleSummaryStyle}>
          <img className="summaryCardImg" src="/assets/img/mentors.svg"></img>
          <p className="adminSummaryTitle">Mentors</p>
          <p className="adminSummaryCount">
            {props.mentorsamount} mentors in total
          </p>
        </Card>
        <Card styles={singleSummaryStyle}>
          <img className="summaryCardImg" src="/assets/img/mentees.svg"></img>
          <p className="adminSummaryTitle">Mentees</p>
          <p className="adminSummaryCount">
            {props.menteesamount} mentees in total
          </p>
        </Card>
      </Card>
    </Card>
  );
}

export default ActivitySummary;

import React from 'react';
import { Link } from 'react-router-dom';

function UserPlanTable({ heading, isTitle, showActions, isLink, data }) {
  return (
    <div className="user-plan-table">
      <p>
        <img alt="planning" src="/assets/img/planning.svg" />
        {heading}
      </p>
      <div className="user-plan-table-header">
        <div className="user-plan-table-head user-plan-table-sn">S/N</div>
        <div className="user-plan-table-head user-plan-table-title">
          {isTitle ? 'Title' : 'Mentees'}
        </div>
        {showActions ? (
          <div className="user-plan-table-head user-plan-table-action">
            Actions
          </div>
        ) : (
          <div className="user-plan-table-head user-plan-table-action">
            &nbsp;
          </div>
        )}
      </div>
      <div className="user-plan-table-body">
        {data.length
          ? data.map((item, index) => {
              return (
                <div key={index}>
                  <p className="user-plan-table-sn">{index + 1}</p>
                  {!isLink ? (
                    <p className="user-plan-table-title">{item.title}</p>
                  ) : (
                    <p className="user-plan-table-title">
                      <Link to={item.id}>{item.name}</Link>
                    </p>
                  )}
                  <p className="user-plan-table-action">
                    {showActions ? (
                      <>
                        <button className="user-plan-action-edit">
                          <i className="mdi mdi-pencil"></i>&nbsp;Edit
                        </button>
                        <button className="user-plan-action-delete">
                          <i className="mdi mdi-delete"></i>&nbsp;Delete
                        </button>{' '}
                      </>
                    ) : (
                      ''
                    )}
                  </p>
                </div>
              );
            })
          : 'None currently available'}
      </div>
    </div>
  );
}

export default UserPlanTable;

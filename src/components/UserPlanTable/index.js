import React from 'react';

function UserPlanTable() {
  return (
    <div className="user-plan-table">
      <p>
        <img src="/assets/img/planning.svg" />
        Existing Plans
      </p>
      <div className="user-plan-table-header">
        <div className="user-plan-table-head user-plan-table-sn">S/N</div>
        <div className="user-plan-table-head user-plan-table-title">Title</div>
        <div className="user-plan-table-head user-plan-table-action">
          Actions
        </div>
      </div>
      <div className="user-plan-table-body">
        <div>
          <p className="user-plan-table-sn">1</p>
          <p className="user-plan-table-title">Mr Adeleke Mentorship plan</p>
          <p className="user-plan-table-action">
            <button className="user-plan-action-edit">
              <i className="mdi mdi-pencil"></i>&nbsp;Edit
            </button>
            <button className="user-plan-action-delete">
              <i className="mdi mdi-delete"></i>&nbsp;Delete
            </button>
          </p>
        </div>
        <div>
          <p className="user-plan-table-sn">2</p>
          <p className="user-plan-table-title">Grow in Python in 10 Days</p>
          <p className="user-plan-table-action">
            <button className="user-plan-action-edit">
              <i className="mdi mdi-pencil"></i>&nbsp;Edit
            </button>
            <button className="user-plan-action-delete">
              <i className="mdi mdi-delete"></i>&nbsp;Delete
            </button>
          </p>
        </div>
        <div>
          <p className="user-plan-table-sn">3</p>
          <p className="user-plan-table-title">
            Javascript with Mosh Hammedani and Scott Moss
          </p>
          <p className="user-plan-table-action">
            <button className="user-plan-action-edit">
              <i className="mdi mdi-pencil"></i>&nbsp;Edit
            </button>
            <button className="user-plan-action-delete">
              <i className="mdi mdi-delete"></i>&nbsp;Delete
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserPlanTable;

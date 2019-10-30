import React from 'react';

function UserDashFilterFunc() {
  return (
    <div className="user-filter-area">
      <p>
        <img alt="filter" src="/assets/img/funnel.svg" />
        Filter Results :
      </p>
      &nbsp;
      <button className="active">
        Approved <span>20</span>
      </button>
      <button>
        Pending <span>5</span>
      </button>
      <button>
        Rejected <span>13</span>
      </button>
      <button>
        Cancelled <span>100</span>
      </button>
    </div>
  );
}

export default UserDashFilterFunc;

import React from 'react';
import { withRouter } from 'react-router-dom';

function UserSearch({ history }) {
  const searchFormHandler = e => {
    e.preventDefault();
    const query = e.target.elements[0].value;
    history.push(`/dashboard/search?search=${query}`);
  };
  return (
    <form method="get" action="/dashboard/search" onSubmit={searchFormHandler}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search by Name, Skill or Location"
      />
      <button type="submit">
        <i className="mdi mdi-magnify" />
      </button>
    </form>
  );
}

export default withRouter(UserSearch);

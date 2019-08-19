import React from 'react';

function UserSearch() {
  return (
    <form method="get" action="/dashboard/search">
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

export default UserSearch;

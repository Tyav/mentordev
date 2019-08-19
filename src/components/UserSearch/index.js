import React from 'react';

function UserSearch() {
  return (
    
      <form>
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

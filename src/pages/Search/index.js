import React, { useEffect, useState } from 'react';
import axios from 'axios';

import UserDashHeading from '../../components/UserDashHeading';
import UserLatestConnect from '../../components/UserLatestConnects';

function Search() {
  const [searchResults, setSearchResults] = useState([{}]);
  const urlParams = new URLSearchParams(window.location.search);
  const queryParams = urlParams.get('search');

  useEffect(() => {
    axios({
      method: 'POST',
      url: `http://localhost:6060/api/v1/user/search?search=${queryParams}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then(response => {
      console.log(response.data);
      setSearchResults([...response.data.payload]);
    });
    console.log(window.location);
  }, [queryParams, window.location.href]);

  return (
    <>
      <UserDashHeading
        text={`${searchResults.length} ${
          searchResults.length !== 1 ? 'Mentors' : 'Mentor'
        } Found`}
        icon="account-search"
      />
      <div className="new-recent-mentor-list">
        {searchResults.map((result, index) => {
          return (
            <UserLatestConnect
              key={index}
              image={result.avatar}
              name={result.name}
              email={result.email}
              tags={result.skills}
              userlocation={result.location}
            />
          );
        })}
      </div>
    </>
  );
}

export default Search;
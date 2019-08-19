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
    }).then(response => {
      setSearchResults([...response.data.payload]);
    });
  }, [queryParams]);
  console.log(searchResults);

  return (
    <>
      <UserDashHeading
        text={`${searchResults.length} ${
          searchResults.length !== 1 ? 'Mentors' : 'Mentor'
        } Found`}
      />
      <div className="new-recent-mentor-list">
        {searchResults.map(result => {
          return (
            <>
              <UserLatestConnect
                image={result.avatar}
                name={result.name}
                email={result.email}
                tags={result.skills}
                userlocation={result.location}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Search;

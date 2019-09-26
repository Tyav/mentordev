import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserLatestConnect from '../UserLatestConnects';
import UserDashHeading from '../UserDashHeading';
import Button from '../Button';

import { readCookie } from '../../helper/cookie';
import axios from 'axios';

import './UserConnects.css';

/**
 * This component is for showing the list of recent connections
 * image => the user's profile image
 * name => the user's name
 * email => the user's email
 * tags => the array of skills the user has
 * schedule => the schedule the meentee booked for this particular mentor
 * The list below should be converted to a single loop on db data
 */
function UserConnects() {
  const isMentor = readCookie('validateType');
  const token = readCookie('mentordev_token');
  const [latestConnect, setLatestConnect] = useState([]);

  const handleSearchClick = e => {
    e.preventDefault();
    const searchInput = document.getElementById('search');
    searchInput.style.boxShadow = '0 0 15px #ccc';
    searchInput.focus();
  };

  useEffect(() => {
    async function fetchContact() {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/contact`,
          config,
        );
        setLatestConnect([...response.data.payload]);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchContact();
  }, [token]);
  return (
    <>
      {!isMentor ? (
        <UserDashHeading
          text="Your most recent Mentors"
          icon="checkbox-marked-circle-outline"
        />
      ) : (
        <UserDashHeading
          text="Your most recent Mentees"
          icon="checkbox-marked-circle-outline"
        />
      )}
      <div className="new-recent-mentor-list">
        {latestConnect.length ? (
          latestConnect.map(connect => {
            return (
              <UserLatestConnect
                image={connect.contact.avatar}
                name={connect.contact.name}
                email={connect.contact.email}
                tags={[...connect.contact.skills]}
                key={connect.contact._id}
                schedule={`${connect.schedule.day} ${connect.schedule.time.from} to ${connect.schedule.time.to}`}
              />
            );
          })
        ) : (
          <div className="no-recent-connects">
            <p>Welcome, You don not currently have any connections</p>
            <div className="what-you-can-do">
              {!isMentor ? (
                <>
                  <div>
                    <i className="mdi mdi-account-search"></i>
                    <h3>Search</h3>
                    <p>Search for a mentor based on Stack, Location, or Name</p>
                    <Button
                      className="btn-success-outline"
                      text="Search Mentors"
                      onButtonClick={handleSearchClick}
                    ></Button>
                  </div>
                  <div>
                    <i className="mdi mdi-chart-timeline-variant"></i>
                    <h3>Connect & Grow</h3>
                    <p>Connect with mentors and watch yourself grow.</p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <i className="mdi mdi-clock-outline"></i>
                    <h3>Create Schedules</h3>
                    <p>
                      Create schedules and slots. This would be listed for
                      mentees to request.
                    </p>
                    <Link to="/dashboard/schedule">
                      <Button
                        className="btn-success-outline"
                        text="Add Schedules"
                      ></Button>
                    </Link>
                  </div>
                  <div>
                    <i className="mdi mdi-chart-timeline-variant"></i>
                    <h3>Connect & Grow</h3>
                    <p>
                      Help build the next generation of World Class Developers.
                      This is an oppurtunity to give back.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default UserConnects;

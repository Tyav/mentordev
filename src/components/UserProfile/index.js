import React, { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import { formatLocalUser } from '../../helper/formatUpdateData';
import { UserObject } from '../../Context';
import Tag from '../Tag';
import { isArray } from 'util';
import { readCookie } from '../../helper/cookie'

function Userprofile() {
  const token = readCookie('mentordev_token');
  const { user, setUser } = useContext(UserObject);

  useEffect(() => {
    fetchUser(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const fetchUser = token => {
    return axios({
      method: 'GET',
      url: `${process.env.REACT_APP_BACKEND_URL}/user/me`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        if (response.data.statusCode === 200) {
          const userValue = formatLocalUser(response.data.payload);
          setUser(userValue);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="new-dash-user-profile">
      <div className="new-dash-card-header">
        <img src={user.avatar} alt="user profile" />
        <i className="mdi mdi-dots-vertical" />
      </div>
      <p className="new-dash-username">{user.fullname}</p>
      <p className="new-dash-username">{user.email || 'Email required'}</p>
      <p className="new-dash-account-brief">
        <span>
          1K <i>requests</i>
        </span>{' '}
        <span>
          47.5K <i>mentees</i>
        </span>{' '}
        <span>
          5 <i>messages</i>
        </span>
      </p>
      <p className="new-dash-user-description">{user.bio}</p>
      <div className="new-dash-user-tags">{displayTags(user)}</div>
      <NavLink className="new-dash-profile-link" to="/dashboard/profile">
        <i className="mdi mdi-circle-edit-outline" /> Edit Profile
      </NavLink>
    </div>
  );
}

export default Userprofile;

function displayTags({ skills }) {
  if (!skills || isArray(skills)) return '';
  return skills.split(', ').map((skill, index) => <Tag tagname={skill} key={index} />);
}

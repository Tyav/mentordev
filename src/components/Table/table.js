import React, { useState, useEffect } from 'react';
import styles from './table.module.css';
import { Link } from 'react-router-dom';

import { sendGetRequest } from '../../actions';

function Table({ name, email, role }) {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    sendGetRequest('/api/v1/user').then(res => {
      setUserList(res.data.payload);
    });
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>ROLE</th>
          <th>STATUS</th>
          <th>INFO</th>
        </tr>
      </thead>
      <tbody>
        {userList.map(user => {
          return (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.isAdmin ? 'Admin' : user.isMentor ? 'Mentor' : 'Mentee'}
              </td>
              <td>{user.isVerified ? 'Active' : 'Inactive'}</td>
              <td>
                <Link to={`/admin/users/${user.id}`}>
                  <div className={styles.icon}>
                    <i
                      className="mdi mdi-information-outline"
                      aria-hidden="true"
                    />
                    <span> More</span>
                  </div>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;

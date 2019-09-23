import React, { useState, useEffect } from 'react';
import styles from './table.module.css';
import { Link } from 'react-router-dom';

import { sendGetRequest } from '../../actions';

function Table({ name, email, role}) {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    sendGetRequest('/user').then(res => {
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
        {userList.filter((user)=> {
          if (role === 'mentor'){
           return user['isMentor'] && !user['isAdmin'] && user['isVerified'];
          } else if (role === 'mentee'){
            return !user['isMentor'] && !user['isAdmin'] && user['isVerified'];
          } else if (role === 'admin'){
            return user['isAdmin'] && user['isVerified'];
          } else if (role === 'inactive'){
            return !user['isVerified'];
          } else {
            return user['isVerified'];
          }
        }).map(user => {
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

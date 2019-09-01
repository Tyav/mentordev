import React, {useState, useEffect} from 'react';
import styles from './mentorshipTable.module.css';
import { Link } from 'react-router-dom';
import {sendGetRequest} from '../../actions'

function MentorshipTable(props) {
  const [contacts, setContacts] = useState([])
  useEffect(() => {
    sendGetRequest('/api/v1/contacts')
    return () => {
      
    };
  }, [])
  return (
    <table>
      <thead>
        <tr>
          <th>MENTOR</th>
          <th>MENTEE</th>
          <th>DAY</th>
          <th>TIME</th>
          <th>INFO</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Olapade Sodeeq</td>
          <td>Olapade Abiodun</td>
          <td>Friday</td>
          <td>12:00PM</td>
          <td>
            <Link to="/">
              <div className={styles.icon}>
                <i className="fa fa-info-circle" aria-hidden="true" />
                <span>-More</span>
              </div>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default MentorshipTable;

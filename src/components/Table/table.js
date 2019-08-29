import React, { useState, useEffect } from 'react';
import styles from './table.module.css';
import { Link } from 'react-router-dom';

function Table({name, email, role, }) {
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
        <tr>
          <td>Olapade Sodeeq</td>
          <td>olapadeabiodun20@gmail.com</td>
          <td>Admin</td>
          <td>Active</td>
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

export default Table;

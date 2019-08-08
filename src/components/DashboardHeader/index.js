import React from 'react';
import styles from './DashboardHeader.module.css';

const DashboardHeader = () => {
  return (
    <>
      <div className={styles.container}>
        <nav className={`${styles.navHeader}`}>
          <ul className={styles.header}>
            <li className={styles.headerTitle} style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '2rem' }}>DASHBOARD</h2>
              <p style={{ fontStyle: 'italic', fontSize: '1rem' }}>Welcome, Rukee Victor</p>
            </li>
            <li className={styles.otherNav}>
              <p>
                <a
                  href="#"
                  rel="noopener noreferrer"
                  style={{ fontSize: '1.5rem', color: 'inherit' }}
                >
                  <i className="far fa-bell" />
                </a>
              </p>
              <p>
                <a
                  href="#"
                  rel="noopener noreferrer"
                  style={{ fontSize: '2.5rem', color: 'inherit' }}
                >
                  <i className="fas fa-users-cog" />
                </a>
              </p>
              <p style={{ fontStyle: 'italic', fontSize: '1rem', paddingTop: '1rem' }}>
                Rukee, Victor
              </p>
            </li>
          </ul>
        </nav>

        <div className={styles.main}>
          <div className={styles.side_nav}>Name Here</div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;

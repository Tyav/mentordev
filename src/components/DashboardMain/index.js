import React from 'react';

import styles from './DashboardMain.module.css';
import SearchBar from '../SearchBar';

const DashboardMain = () => {
  return (
    <div className={styles.container}>
      <SearchBar />
    </div>
  );
};

export default DashboardMain;

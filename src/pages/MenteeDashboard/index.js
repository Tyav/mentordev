import React from 'react';

import DashboardHeader from '../../components/DashboardHeader';
import DashboardAside from '../../components/DashboardAside';
import DashboardMain from '../../components/DashboardMain';
import styles from './MenteeDashboard.module.css';
import SideBar from '../../components/SideBar';
import './sideBar.css';
import './reset.css';

const MenteeDashboard = () => {
  return (
    <div className={styles.container} id="container">
      <div className={styles.aside}>
        <DashboardAside />
      </div>
      <div className={styles.hamburger}>
        <SideBar pageWrapId={'page-wrap'} outerContainerId={'container'} />
      </div>

      <div className={styles.content} id="page-wrap">
        <DashboardHeader />
        <DashboardMain />
      </div>
    </div>
  );
};

export default MenteeDashboard;

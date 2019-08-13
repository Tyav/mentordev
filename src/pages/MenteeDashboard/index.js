import React from 'react';
import { Route } from 'react-router-dom';

import RequestDashboard from '../../components/RequestDashboard';
import DashboardHeader from '../../components/DashboardHeader';
import DashboardAside from '../../components/DashboardAside';
import DashboardMain from '../../components/DashboardMain';
import Profile from '../../components/DashBoardProfile';
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
        <div>
          <Route exact path="/dashboard" component={DashboardMain} />
          <Route path="/dashboard/profile" component={Profile} />
          <Route path="/dashboard/requests" component={RequestDashboard} />
        </div>
      </div>
    </div>
  );
};

export default MenteeDashboard;

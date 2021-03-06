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
    <div className={styles.dashboard_container}>
      <div className={styles.container} id="container">
        <div className={styles.aside}>
          <DashboardAside />
        </div>
        <div className={styles.hamburger}>
          <SideBar pageWrapId={'page-wrap'} outerContainerId={'container'} />
        </div>

        <div className={styles.content} id="page-wrap">
          <div className={styles.sticky_header}>
            <DashboardHeader />
          </div>
          <div>
            <Route exact path="/dashboard" component={DashboardMain} />
            <Route path="/formerdashboard/profile" component={Profile} />
            <Route
              path="/formerdashboard/requests"
              component={RequestDashboard}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenteeDashboard;

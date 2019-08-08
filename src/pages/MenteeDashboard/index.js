import React from 'react';
import './reset.css';
import DashboardHeader from '../../components/DashboardHeader';
import DashboardAside from '../../components/DashboardAside';
import DashboardMain from '../../components/DashboardMain';
import styles from './MenteeDashboard.module.css';

const MenteeDashboard = () => {
  return (
    <div className={styles.container}>
      <DashboardAside />
      <div className={styles.content}>
        <DashboardHeader />
        <DashboardMain />
      </div>
    </div>
  );
};

export default MenteeDashboard;

import React from 'react';

import styles from './MainComponent.module.css';

const MainComponent = props => {
  return (
    <div className={styles.outer_container}>
      <div className={styles.container}>{props.children}</div>
    </div>
  );
};

export default MainComponent;

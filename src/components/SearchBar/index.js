import React from 'react';

import styles from './seachBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.search}>
        <input type="text" className={styles.searchTerm} placeholder="What are you looking for?" />
        <button type="submit" className={styles.searchButton}>
          <i className="fa fa-search" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

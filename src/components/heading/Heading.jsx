import React from 'react';

import styles from './index.module.scss';

const Heading = ({ title }) => {
  return (
    <div className={styles.heading}>
      <div className="container">
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
};

export default Heading;

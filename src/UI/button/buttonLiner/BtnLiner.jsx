import React from 'react';

import styles from './index.module.scss';

const BtnLiner = ({ children, onClick, disabled, wx }) => {
  return disabled ? (
    <div className={`${styles.btn}  ${styles.btnDisable}`} style={{ '--width': `${wx}px` }}>
      {children}
    </div>
  ) : (
    <div className={styles.btn} onClick={onClick} style={{ '--width': `${wx}px` }}>
      {children}
    </div>
  );
};

export default BtnLiner;

import React from 'react';

import styles from './index.module.scss';

const BtnSolid = ({ children, onClick, disabled, wx, wm, ws }) => {
  return disabled ? (
    <div
      className={`${styles.btn}  ${styles.btnDisable}`}
      style={{
        '--width': `${wx}px`,
        '--widthM': `${wm ? wm : wx}px`,
        '--widthS': `${ws == 'auto' ? '100%' : `${ws ? ws : wm ? wm : wx}px`}`
      }}
    >
      {children}
    </div>
  ) : (
    <div
      className={styles.btn}
      onClick={onClick}
      style={{
        '--width': `${wx}px`,
        '--widthM': `${wm ? wm : wx}px`,
        '--widthS': `${ws == 'auto' ? '100%' : `${ws ? ws : wm ? wm : wx}px`}`
      }}
    >
      {children}
    </div>
  );
};

export default BtnSolid;

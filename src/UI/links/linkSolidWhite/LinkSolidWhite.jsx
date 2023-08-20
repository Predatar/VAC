import React from 'react';

import { Link } from 'react-router-dom';

import styles from './index.module.scss';

const LinkSolidWhite = ({ children, to, disabled, wx, wm, ws }) => {
  return disabled ? (
    <div
      className={`${styles.link}  ${styles.linkDisable}`}
      style={{
        '--width': `${wx}px`,
        '--widthM': `${wm ? wm : wx}px`,
        '--widthS': `${ws == 'auto' ? '100%' : `${ws ? ws : wm ? wm : wx}px`}`
      }}
    >
      {children}
    </div>
  ) : (
    <Link
      className={styles.link}
      to={to}
      style={{
        '--width': `${wx}px`,
        '--widthM': `${wm ? wm : wx}px`,
        '--widthS': `${ws == 'auto' ? '100%' : `${ws ? ws : wm ? wm : wx}px`}`
      }}
    >
      {children}
    </Link>
  );
};

export default LinkSolidWhite;

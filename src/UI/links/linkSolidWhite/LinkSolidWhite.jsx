import React from 'react';

import { Link } from 'react-router-dom';

import styles from './index.module.scss';

const LinkSolidWhite = ({ children, to, disabled, wx }) => {
  return disabled ? (
    <div className={`${styles.link}  ${styles.linkDisable}`} style={{ '--width': `${wx}px` }}>
      {children}
    </div>
  ) : (
    <Link className={styles.link} to={to} style={{ '--width': `${wx}px` }}>
      {children}
    </Link>
  );
};

export default LinkSolidWhite;

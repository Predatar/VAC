import React from 'react';

import styles from './index.module.scss';

const Step = ({ number, title, subtitle }) => {
  return (
    <div className={styles.step}>
      <div className={styles.number}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 75 67" fill="none">
          <path
            d="M29.2241 5.23313C32.9014 -1.07772 42.0986 -1.07771 45.7759 5.23315L73.2059 52.3075C76.8778 58.6091 72.2926 66.5 64.9299 66.5H10.07C2.70741 66.5 -1.87779 58.6091 1.79413 52.3075L29.2241 5.23313Z"
            fill="white"
            stroke="#41456B"
          />
        </svg>
        {number}
      </div>
      <div className={styles.text}>
        <div className={styles.textTitle}>{title}</div>
        <div className={styles.textSubtitle}>{subtitle}</div>
      </div>
    </div>
  );
};

export default Step;

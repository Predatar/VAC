import React from 'react';

import MakeModel from './makeModel';
import BodyType from './bodyType';
import Transmission from './transmission';
import Price from './price';
import Year from './year';
import Kilometres from './kilometres';

import styles from './index.module.scss';

const Filter = ({ onClick, filter }) => {
  return (
    <div className={styles.filter + ' ' + `${filter ? styles.filterActive : ''}`}>
      <div className={styles.close} onClick={onClick}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L23 23" stroke="#41456B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M23 1L0.999999 23"
            stroke="#41456B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className={styles.container}>
        <div className={styles.closeMob} onClick={onClick}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L23 23" stroke="#41456B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M23 1L0.999999 23"
              stroke="#41456B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className={styles.title}>Detailed search</div>
        <div className={styles.clear} style={{ display: 'none' }}>
          Clear filters
        </div>
      </div>
      <div className={styles.wrapper}>
        <MakeModel />
        <BodyType />
        <Transmission />
        <Price />
        <Year />
        <Kilometres />
      </div>
    </div>
  );
};

export default Filter;

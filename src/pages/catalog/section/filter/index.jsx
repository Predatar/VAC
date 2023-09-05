import React from 'react';

import MakeModel from './makeModel';
import BodyType from './bodyType';
import Transmission from './transmission';
import Price from './price';
import Year from './year';
import Kilometres from './kilometres';

import styles from './index.module.scss';

const Filter = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.container}>
        <div className={styles.title}>Detailed search</div>
        <div className={styles.clear}>Clear filters</div>
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

import React from 'react';
import LinkSolid from '../../../../UI/links/linkSolid/LinkSolid';

import styles from './index.module.scss';

import chevrole from '../../img/Chevrolet.png';

const FirstSection = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <div className={styles.title}>Our credit policy</div>
            <div className={styles.subtitle}>You want to secure a loan that works for your budget. Here at VAC we work with Canada’s largest lenders to help you find the best interest rates and terms for your auto loan.</div>
            <div className={styles.btn}>
              <LinkSolid to={'/'} wx={200} ws={'auto'}>
                request a car
              </LinkSolid>
            </div>
          </div>
          <div className={styles.img}>
            <img src={chevrole} alt="chevrole" loading='lazy'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

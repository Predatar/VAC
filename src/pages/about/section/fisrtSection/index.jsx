import React from 'react';

import LinkSolid from '../../../../UI/links/linkSolid/LinkSolid';

import styles from './index.module.scss';

import kia from '../../img/Kia.png';

const FirstSection = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <div className={styles.carTitle}>Our mission</div>
            <div className={styles.cardSubtitle}>
              Our mission at VAC is to help you find the perfect car at the perfect price and with the perfect auto
              loan. We make buying a car simple. You can complete the entire process from home—we’ll even deliver the
              car to you!
            </div>
            <div className={styles.cardBtn}>
              <LinkSolid to={'/'} wx={200} ws={'auto'}>
                request a car
              </LinkSolid>
            </div>
          </div>
          <div className={styles.img}>
            <img src={kia} alt="kia" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

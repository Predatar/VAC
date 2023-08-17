import React from 'react';

import LinkSolid from '../../../../UI/links/linkSolid/LinkSolid';

import styles from './index.module.scss';

import Honda from '../../img/HondaLeft.png';
import Corola from '../../img/Corola.png';

const FifthSection = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.img}>
            <div className={styles.honda}>
              <img src={Honda} alt="honda" />
            </div>
            <div className={styles.toyota}>
              <img src={Corola} alt="toyota" />
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.title}>Сhoose your dream vehicle in our catalog</div>
            <div
              className={styles.containerWrapper}
            >
              <div className={styles.subtitle}>
                In our catalogue there are many models of vehicles. Choose your car to your liking.
              </div>
              <LinkSolid to={'/'} wx={190}>
                Inventory
              </LinkSolid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;

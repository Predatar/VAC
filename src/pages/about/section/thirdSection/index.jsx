import React from 'react';

import styles from './index.module.scss';

import nissan from '../../../main/img/Nissan.png';

const ThirdSection = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.img}>
            <img src={nissan} alt="nissan" />
          </div>
          <div className={styles.text}>
            <div className={styles.title}>VAC is convenience and transparency</div>
            <div className={styles.subtitle}>
              We want to make simple for you to find the car you want. We also want to make sure you are 100%
              comfortable with the terms of the conditions of your auto loan.
            </div>
            <div className={styles.subtitle}>
              Buying a car has never been easier. You pick out the car you want on our website. You work with one of our
              Qualified Agents to secure financing. Then we bring the car to you—all before you sign anything. You test
              drive the vehicle, and if you like it, you sign the loan documents right there and the car is yours.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

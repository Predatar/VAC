import React from 'react';

import styles from './index.module.scss';

import team from '../../img/Team_Photo.jpg';

const SeventhSection = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <div className={styles.title}>We're dynamic team of creative people with innovative mind</div>
            <div className={styles.subtitle}>Our History</div>
            <div className={styles.descr}>
              We founded VAC because we hated how complicated it was to buy a car. You only have so much free time in
              your life. You don’t want to waste it going to different car dealerships every weekend for weeks and
              months trying to track down the right car.
            </div>
            <div className={styles.subtitle}>Our Goal</div>
            <div className={styles.descr}>
              Buying a car has never been easier. You pick out the car you want on our website. You work with one of our
              Qualified Agents to secure financing. Then we bring the car to you—all before you sign anything. You test
              drive the vehicle, and if you like it, you sign the loan documents right there and the car is yours.{' '}
            </div>
          </div>
					<div className={styles.img}>
						<img src={team} alt="team"/>
					</div>
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;

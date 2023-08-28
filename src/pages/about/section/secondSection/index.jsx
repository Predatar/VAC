import React from 'react';

import Step from '../../../../components/step';

import styles from './index.module.scss';

const SecondSection = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <div className={styles.title}>Get your dream car</div>
            <div className={styles.subtitle}>
              We founded VAC because we hated how complicated it was to buy a car. You only have so much free time in
              your life. You don’t want to waste it going to different car dealerships every weekend for weeks and
              months trying to track down the right car.
            </div>
            <div className={styles.subtitle}>
              We also hated how choosing a car and figuring out the financing for the vehicle were treated as totally
              separate processes! Instead of dealing with a salesperson, then being handed off to a closer, and then
              shuffled over to a finance manager, we wanted to create a way for people to buy a car and only deal with a
              single person for the entire process.
            </div>
          </div>
          <div className={styles.steps}>
            <Step
              number={1}
              title={'Quickly'}
              subtitle={'You do not spend a lot of your time going to car dealerships'}
            />
            <Step
              number={2}
              title={'Simply'}
              subtitle={'You can order your dream car just by talking to our specialist by phone'}
            />
            <Step
              number={3}
              title={'Conveniently'}
              subtitle={'We will deliver the car directly to the doorstep of your home or office'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

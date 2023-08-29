import React from 'react';

import LinkSolid from '../../../../UI/links/linkSolid/LinkSolid';

import styles from './index.module.scss';

const FouthSeection = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.title}>Get a car at the best prices and conditions</div>
            <div className={styles.text}>
              Not only is buying a car with VAC easy, it’s also the best way to save money. We have partnerships with
              Canada’s largest lenders. That allows us to help you secure loans at the best interest rates available.
            </div>
            <div className={styles.text}>
              Because convenience and transparency are our founding principles, we take the time to answer all of your
              questions about the vehicle and the auto loan. We will send you pictures and videos of any part of the car
              you like before you request a test drive.
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.subtitle}>
              We think that VAC is the best way to buy a car in Canada. Try it for yourself and see how much time and
              money you can save.
            </div>
            <div className={styles.descr}>
              There are never any hidden fees or costs. We never ask you to sign anything until we have explained it
              clearly and you have had a chance to read it.
            </div>
            <div className={styles.btn}>
              <LinkSolid to={'/quiz'} wx={200} ws={'auto'}>
                request a car
              </LinkSolid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FouthSeection;

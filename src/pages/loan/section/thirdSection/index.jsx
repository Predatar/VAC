import React from 'react';
import LinkSolid from '../../../../UI/links/linkSolid/LinkSolid';

import styles from './index.module.scss';

import Ford from '../../img/Ford-Escape.png';

const ThirdSection = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <div className={styles.title}>Benefits of getting an auto loan with VAC</div>
            <div className={styles.descr}>
              For many people getting a reasonable auto loan is the best way for them to get a new car. However, the
              benefits of getting the right loan go beyond just being able to drive a nice vehicle.
            </div>
            <div className={styles.subtitle}>
              When you work with VAC, there are never any hidden costs or fees! We lay out all the terms and conditions
              so that you know exactly what details of the loan are before you sign anything.
            </div>
            <div className={styles.btn}>
              <LinkSolid to={'/'} wx={200} ws={'auto'}>
                request a car
              </LinkSolid>
            </div>
          </div>
          <div className={styles.img}>
            <img src={Ford} alt="ford" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

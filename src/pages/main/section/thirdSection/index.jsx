import React from 'react';
import Step from '../../../../components/step';

import styles from './index.module.scss';

import Phone from '../../img/Phone.png';
import Phone_T from '../../img/Phone_T.png';

const ThirdSection = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.title}>Your perfect car in 5 easy steps</div>
        <div className={styles.wrapper}>
          <div className={styles.steps}>
            <Step number={1} title={'First Contact'} subtitle={'Tell us what your dream vehicle is.'} />
            <Step number={2} title={'Vehicle Selection'} subtitle={'One of our Qualified Agents sends you custom pictures and videos of the car you are interested in.'} />
            <Step number={3} title={'Secure Financing'} subtitle={'You work with a dedicated Qualified Agent to secure financing on your terms.'} />
            <Step number={4} title={'Vehicle Delivery'} subtitle={'We deliver your car to your home or office for you to test drive.'} />
            <Step number={5} title={'Getting Vehicle'} subtitle={'If you love the vehicle, you sign the paperwork and keep the car.'} />
          </div>
          <div className={styles.img}>
            <img src={Phone} alt="phone" loading="lazy" />
          </div>
          <div className={styles.imgT}>
            <img src={Phone_T} alt="phone" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

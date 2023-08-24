import React from 'react';

import BtnSolid from '../../../../UI/button/buttonSolid/BtnSolid';

import styles from './index.module.scss';

const FifthSection = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Contact us today and speak with one of our qualified agents</div>
            <div className={styles.btn}>
              <BtnSolid wx={200}>contact us now</BtnSolid>
            </div>
          </div>
          <div className={styles.text}>
            <div className={styles.title}>Our qualified agents</div>
            <div className={styles.subtitle}>
              The true secret to success of VAC isn’t our streamlined purchasing and financing processes. The real
              reason VAC is the easiest and best way to buy a car in Canada is because of our outstanding Qualified
              Agents.
            </div>
            <div className={styles.subtitle}>
              Our team provides you with the best customer experience in the automotive industry. You work with a
              dedicated representative throughout the process. They are able to answer any questions you have about any
              of our vehicles or the financing. Are you interested in seeing pictures or videos of a car? Your qualified
              agent will send them to you.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;

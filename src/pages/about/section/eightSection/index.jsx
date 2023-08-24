import React from 'react';

import Metric from '../../../main/components/metrics/Metrics';

import styles from './index.module.scss';

import team_photo from '../../img/Team_photo1.jpg';

const EightSection = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
					<div className={styles.container}>
						<div className={styles.img}>
							<img src={team_photo} alt="team" />
						</div>
					</div>
          <div className={styles.container}>
            <div className={styles.title}>Main features</div>
            <div className={styles.descr}>We are your one stop shop. We believe that vehicle shopping should be a fun and painless process and with years of experience, we make it just that.</div>
            <div className={styles.group}>
              <Metric text={'7,988+'} descr={'Sold Cars'} />
              <Metric text={'123'} descr={'Working Experts'} />
              <Metric text={'1560+'} descr={'Happy Clients'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EightSection;

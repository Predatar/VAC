import React from 'react';

import SwiperSection from './section/swiper';

import BtnSolid from '../../UI/button/buttonSolid/BtnSolid';

import Calculator from '../../components/calculator/Calculator';

import styles from './index.module.scss';

const CarPage = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.title}>Porsche Panamera 4S</div>
        <div className={styles.subtitle}>Watching now 8 people</div>
        <div className={styles.wrapper}>
          <div className={styles.preview}>
            <SwiperSection />
            <div className={styles.swiperBtn}>
              <BtnSolid ws={'auto'}>apply for this vehicle</BtnSolid>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.price}>
              <span>Price</span>
              <span>34 000 $</span>
            </div>
            <div className={styles.group}>
              <div className={styles.item}>
                <span>Body</span>
                <span>Sedan</span>
              </div>
              <div className={styles.item}>
                <span>Year</span>
                <span>2018</span>
              </div>
              <div className={styles.item}>
                <span>Transmission</span>
                <span>Automatic</span>
              </div>
              <div className={styles.item}>
                <span>Kilometres </span>
                <span>20 000</span>
              </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.detail}>
              <div className={styles.detailTitle}>Detail</div>
              <div className={styles.detailGroup}>
                <div className={styles.detailItem}>
                  <span>Rear wheel drive</span>
                  <span>2500-4000 rpm</span>
                </div>
                <div className={styles.detailItem}>
                  <span>6 cylinders</span>
                  <span>0-100 in 2.7 s.</span>
                </div>
                <div className={styles.detailItem}>
                  <span>11 l. per 100 km.</span>
                  <span>Power steering</span>
                </div>
                <div className={styles.detailItem}>
                  <span>Rear wheel drive</span>
                  <span>2500-4000 rpm</span>
                </div>
              </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.descr}>
              <div className={styles.descrTitle}>Description</div>
              <div className={styles.descrText}>
                Porsche 911 - a sports car manufactured by the German company Porsche AG in the back of a two-door coupe
                or a convertible based on it, produced in different generations from 1964 to the present day. <br />
                The 911 index was not originally planned for the timeless designation of different generations of the
                same car, and was no more than one of many similar in the through three-digit internal factory numbering
                of all Porsche models assigned to a very specific 1964 model.
              </div>
            </div>
            <div className={styles.btn}>
              <BtnSolid wx={280} ws={247}>
                Request more information
              </BtnSolid>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.calc}>
        <Calculator />
      </div>
    </div>
  );
};

export default CarPage;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import LinkLiner from '../../../../UI/links/linkLiner/LinkLiner';
import Article from '../../../../UI/article/Article';

import 'swiper/scss';
import 'swiper/scss/navigation';
import './eightSection.scss';

import styles from './index.module.scss';

import article1 from '../../../../img/articles/article1.jpg';
import article2 from '../../../../img/articles/article2.jpg';
import article3 from '../../../../img/articles/article3.jpg';

const EightSection = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.title}>Interesting to read</div>
          <div className={styles.btn}>
            <LinkLiner wx={180}>All articles</LinkLiner>
          </div>

          <Swiper
            className={styles.slider + ' eightSlider'}
            slidesPerView={'auto'}
            spaceBetween={20}
            modules={[Navigation]}
            navigation
            autoHeight
          >
            <SwiperSlide className={styles.slide}>
              <Article to={'/'} img={article1} title={'How to save on buying a car?Why is it better to buy from us'} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Article to={'/'} img={article2} title={'How fast can you order a car in Canada?'} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Article to={'/'} img={article3} title={'How to save on buying a car?Why is it better to buy from us'} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default EightSection;

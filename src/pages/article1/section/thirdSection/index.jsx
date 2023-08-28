import React from 'react';

import LinkLiner from '../../../../UI/links/linkLiner/LinkLiner';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import Article from '../../../../UI/article/Article';

import 'swiper/scss';
import 'swiper/scss/navigation';
import './thirdSection.scss';
import styles from './index.module.scss';

import art5 from '../../../../img/articles/article5.jpg';
import art3 from '../../../../img/articles/article3.jpg';
import art6 from '../../../../img/articles/article6.jpg';
import art8 from '../../../../img/articles/article8.jpg';

const ThirdSection = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.title}>You might like it</div>
          <div className={styles.btn}>
            <LinkLiner to={'/blog'} wx={180} ws={'auto'}>
              all article
            </LinkLiner>
          </div>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={20}
            modules={[Navigation]}
            navigation
            className={styles.slider + ' thirdSection'}
          >
            <SwiperSlide className={styles.slide}>
              <Article
                to={'/blog/2'}
                img={art5}
                title={'How to save on buying a car? Why is it better to buy from us'}
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Article to={'/blog/2'} img={art3} title={'How fast can you order a car in Canada?'} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Article
                to={'/blog/2'}
                img={art6}
                title={'How to save on buying a car? Why is it better to buy from us'}
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Article
                to={'/blog/2'}
                img={art8}
                title={'How to save on buying a car? Why is it better to buy from us'}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

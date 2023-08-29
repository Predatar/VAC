import React, { useState } from 'react';
import LinkSolidWhite from '../../../../UI/links/linkSolidWhite/LinkSolidWhite';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import './firstSection.scss';

import styles from './index.module.scss';

import Nissan from '../../img/Nissan.png';
import Ford from '../../img/Ford.png';
import Ram from '../../img/Ram.png';
import Dodge from '../../img/Dodge.png';

const FirstSection = () => {
  const [slide, setSlide] = useState(0);
  const cars = ['suv', 'car', 'truck', 'van'];

  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.title}>The easiest way to buy a car in Canada</div>
          <div className={styles.btn}>
            <LinkSolidWhite to={'/quiz'} wx={200} ws={214}>
              Request a {cars[slide]}
            </LinkSolidWhite>
          </div>

          <Swiper
            slidesPerView={'auto'}
            centeredSlides
            spaceBetween={60}
            modules={[Navigation]}
            navigation
            className={styles.slider + ' firstSlider'}
            onSlideChange={swiper => setSlide(swiper.activeIndex)}
          >
            <SwiperSlide className={styles.slide}>
              <img src={Nissan} alt="auto" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img src={Ford} alt="auto" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img src={Ram} alt="auto" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img src={Dodge} alt="auto" loading="lazy" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

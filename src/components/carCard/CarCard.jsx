import React from 'react';

import {Link} from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/scrollbar';
import styles from './index.module.scss';
import './index.scss';

const CarCard = ({ img, text, price }) => {
  return (
    <div className={styles.card + ' carCard'}>
      <Swiper slidesPerView={1} modules={[Scrollbar]} scrollbar={{ draggable: true }}>
        <SwiperSlide>
          <img src={img} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="img" />
        </SwiperSlide>
      </Swiper>
      <div className={styles.wrapper}>
        <Link to='/carPage' className={styles.title}>{text}</Link>
        <div className={styles.price}>{price}</div>
        <div className={styles.tags}>
          2012 year <div className={styles.divider}></div> Sedan <div className={styles.divider}></div>{' '}
          <span>Transmission</span> <span>Kilometres</span>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

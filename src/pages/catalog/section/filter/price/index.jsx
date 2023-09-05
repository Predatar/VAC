import React from 'react';

import RangeSlider from 'react-range-slider-input';

import 'react-range-slider-input/dist/style.css';
import styles from './index.module.scss';
import styles1 from '../makeModel/index.module.scss';
import './slider.scss';

const Price = () => {
  const openDropdown = e => {
    if (e.target.classList.contains(styles1.dropdownTitle)) {
      const parentNode = e.target.parentNode;
      parentNode.classList.toggle(styles1.dropdownActive);

      if (parentNode.classList.contains(styles1.dropdownActive)) {
        parentNode.style = `--heightDrop: auto`;
      } else {
        parentNode.style = `--heightDrop: ${45}px`;
      }
    }
  };

  return (
    <div className={styles1.dropdown} style={{ '--heightDrop': '45px' }}>
      <div className={styles1.dropdownTitle} onClick={openDropdown}>
        Price
        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 1L9 9L1 1" stroke="#41456B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <span>$ 10 000</span> <span>$ 100 000</span>
        </div>
        <RangeSlider min="10000" max="100000" defaultValue={[12000, 50000]} />
      </div>
    </div>
  );
};

export default Price;

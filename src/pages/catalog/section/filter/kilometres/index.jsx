import React from 'react';

import RangeSlider from 'react-range-slider-input';

import 'react-range-slider-input/dist/style.css';
import styles from './index.module.scss';
import styles1 from '../makeModel/index.module.scss';
import './slider.scss';

const Kilometres = () => {
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
        Kilometres
        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 1L9 9L1 1" stroke="#41456B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          100 000<span>or less</span>
        </div>
        <RangeSlider
          className="single-thumb"
          min="100000"
          max="1000000"
          defaultValue={[100000, 500000]}
          thumbsDisabled={[true, false]}
          rangeSlideDisabled={true}
        />
      </div>
    </div>
  );
};

export default Kilometres;

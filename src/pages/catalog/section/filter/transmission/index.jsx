import React from 'react';

import Checkbox from 'react-custom-checkbox';
import { FiCheck } from 'react-icons/fi';

import styles from './index.module.scss';
import styles1 from '../makeModel/index.module.scss';

const Transmission = () => {
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
        Transmission
        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 1L9 9L1 1" stroke="#41456B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <Checkbox
            size={20}
            borderColor="#d7d7d7"
            icon={<FiCheck color="#7481ff" size={20} />}
            className={styles.checkbox}
            value="Automatic"
          />
          <div className={styles.text}>Automatic</div>
        </div>
        <div className={styles.item}>
          <Checkbox
            size={20}
            borderColor="#d7d7d7"
            icon={<FiCheck color="#7481ff" size={20} />}
            className={styles.checkbox}
            value="Manual"
          />
          <div className={styles.text}>Manual</div>
        </div>
      </div>
    </div>
  );
};

export default Transmission;

import React, { useCallback, useState } from 'react';

import Checkbox from 'react-custom-checkbox';
import { FiCheck } from 'react-icons/fi';

import styles from './index.module.scss';
import styles1 from '../makeModel/index.module.scss';

import Truck from '../../../img/Truck.svg';
import SUV from '../../../img/SUV.svg';
import Sedan from '../../../img/Sedan.svg';
import Hatchback from '../../../img/Hatchback.svg';
import Coupe from '../../../img/Coupe.svg';
import Convertiable from '../../../img/Convertiable.svg';
import VAN from '../../../img/VAN.svg';

const BodyType = () => {
  const [type, setType] = useState([]);

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

  const handleChange = useCallback((value, event) => {
    if (value) {
      setType(array => [...array, event.target.lastChild.value]);
    } else {
      setType(array => array.filter(elem => elem != event.target.lastChild.value));
    }
  }, []);

  /* const renderItems = useCallback(() => {
    const items = type.map(elem => {
      return (
        <div className={styles1.activeFilterItem}>
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={e => {
              setType(array => array.filter(elem => elem != e.target.parentNode.childNodes[1].textContent));
            }}
          >
            <path
              d="M1.375 1.375L9.62496 9.62513"
              stroke="#7481FF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.625 1.375L1.37504 9.62513"
              stroke="#7481FF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {elem}
        </div>
      );
    });

    return (
      <div className={styles1.activeFilter + ' ' + styles1.activeFilterDisabled} ref={wrapper}>
        {items}
      </div>
    );
  }, [type]); */

  return (
    <div className={styles1.dropdown} style={{ '--heightDrop': '45px' }}>
      <div className={styles1.dropdownTitle} onClick={openDropdown}>
        Body type
        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 1L9 9L1 1" stroke="#41456B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      {/* {renderItems()} */}
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <Checkbox
            size={20}
            borderColor="#d7d7d7"
            icon={<FiCheck color="#7481ff" size={20} />}
            className={styles.checkbox}
            value="Trucks"
            onChange={handleChange}
          />
          <div className={styles.text}>
            <img src={Truck} alt="truck" loading="lazy" />
            Trucks
          </div>
        </div>
        <div className={styles.item}>
          <Checkbox
            size={20}
            borderColor="#d7d7d7"
            icon={<FiCheck color="#7481ff" size={20} />}
            className={styles.checkbox}
            value="SUV"
            onChange={handleChange}
          />
          <div className={styles.text}>
            <img src={SUV} alt="truck" loading="lazy" />
            SUV
          </div>
        </div>
        <div className={styles.item}>
          <Checkbox
            size={20}
            borderColor="#d7d7d7"
            icon={<FiCheck color="#7481ff" size={20} />}
            className={styles.checkbox}
            value="Sedan"
            onChange={handleChange}
          />
          <div className={styles.text}>
            <img src={Sedan} alt="truck" loading="lazy" />
            Sedan
          </div>
        </div>
        <div className={styles.item}>
          <Checkbox
            size={20}
            borderColor="#d7d7d7"
            icon={<FiCheck color="#7481ff" size={20} />}
            className={styles.checkbox}
            value="Hatchback"
            onChange={handleChange}
          />
          <div className={styles.text}>
            <img src={Hatchback} alt="truck" loading="lazy" />
            Hatchback
          </div>
        </div>
        <div className={styles.item}>
          <Checkbox
            size={20}
            borderColor="#d7d7d7"
            icon={<FiCheck color="#7481ff" size={20} />}
            className={styles.checkbox}
            value="Coupe"
            onChange={handleChange}
          />
          <div className={styles.text}>
            <img src={Coupe} alt="truck" loading="lazy" />
            Coupe
          </div>
        </div>
        <div className={styles.item}>
          <Checkbox
            size={20}
            borderColor="#d7d7d7"
            icon={<FiCheck color="#7481ff" size={20} />}
            className={styles.checkbox}
            value="Convertiable"
            onChange={handleChange}
          />
          <div className={styles.text}>
            <img src={Convertiable} alt="truck" loading="lazy" />
            Convertiable
          </div>
        </div>
        <div className={styles.item}>
          <Checkbox
            size={20}
            borderColor="#d7d7d7"
            icon={<FiCheck color="#7481ff" size={20} />}
            className={styles.checkbox}
            value="VAN"
            onChange={handleChange}
          />
          <div className={styles.text}>
            <img src={VAN} alt="truck" loading="lazy" />
            VAN
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyType;

import React, { useState, useEffect } from 'react';

import styles from './index.module.scss';

const DropDown = ({ wx, item }) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState(45);
  const [value, setValue] = useState(item[0]);

  useEffect(() => {
    if (active) {
      setHeight(45 + 25.44 * item.length + 5 * (item.length - 1) + 19);
    } else {
      setHeight(45);
    }
  }, [active]);

  const openDropDown = ({ target }) => {
    setActive(!active);
    if (target.className == '') {
      setValue(target.innerHTML);
    }
  };

  return (
    <div className={styles.dropDown} style={{ '--width': `${wx}px`, '--height': `${height}px` }} onClick={openDropDown}>
      <div className={styles.selected}>
        {value}
        <div className={styles.btn + ' ' + (active ? styles.btnActive : '')}>
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 1L9 9L1 1" stroke="#41456B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className={styles.group}>
        {item.map((elem, index) => (
          <div key={index}>{elem}</div>
        ))}
      </div>
    </div>
  );
};

export default DropDown;

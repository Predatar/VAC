import React, { useState, useCallback, useRef } from 'react';

import styles from './index.module.scss';
import styles1 from '../../filter/makeModel/index.module.scss';

import { autoMakers } from '../../../data/automakers';

const Search = ({ onClick }) => {
  const select = useRef();
  const [make, setMake] = useState('');

  const openList = e => {
    if (e.target.classList.contains(styles.selected)) {
      const parentNode = e.target.parentNode;
      parentNode.classList.toggle(styles.selectActive);
    }
  };

  const closeList = () => {
    select.current.classList.remove(styles.selectActive);
  };

  const changeItem = e => {
    if (e.target.classList.contains(styles.item)) {
      console.log(e);
      e.target.parentNode.previousSibling.childNodes[0].textContent = e.target.textContent;

      closeList();
    }
  };

  const handleThumbPosition = useCallback(e => {
    const elemHeight = e.target.scrollHeight - e.target.offsetHeight;
    const newTop = (+e.target.scrollTop / +elemHeight) * 100;
    e.target.parentNode.childNodes[1].childNodes[0].style.top = `${Math.round(newTop)}px`;

    if (newTop > 95) {
      e.target.nextSibling.nextSibling.style.display = 'none';
    } else {
      e.target.nextSibling.nextSibling.style.display = 'block';
    }
  }, []);

  const renderItems = useCallback(() => {
    const re = new RegExp(`${make}`, 'gmi');
    const items = autoMakers
      .filter(auto => re.test(auto))
      .map(auto => {
        return <div className={styles.searchPopupText}>{auto}</div>;
      });

    return (
      <div
        className={styles.searchPopupWrapper}
        onScroll={handleThumbPosition}
        onClick={e => {
          if (e.target.classList.contains(styles.searchPopupText)) {
            setMake(e.target.innerHTML);
          }
        }}
      >
        {items}
      </div>
    );
  }, [make]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.mobFilter} onClick={onClick}>
          <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 1L4 23" stroke="#41456B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1 18L7 18" stroke="#41456B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14 1L14 23" stroke="#41456B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M24 1L24 23" stroke="#41456B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11 12L17 12" stroke="#41456B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21 6L27 6" stroke="#41456B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span>Search Filter</span>
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            name="search"
            id="seacrh"
            className={styles.input}
            placeholder="Find a dream car..."
            onFocus={e => {
              e.target.nextSibling.classList.add(styles.searchPopupActive);
            }}
            onBlur={e => {
              setTimeout(() => {
                e.target.nextSibling.classList.remove(styles.searchPopupActive);
              }, 100);
            }}
          />
          <div className={styles.searchPopup}>
            {renderItems()}
            <div className={styles1.scrollbar}>
              <div className={styles1.scrollbarThumb}></div>
            </div>
            <div className={styles1.searchPopupOpacity}></div>
          </div>
        </div>
        <div className={styles.img}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1H4C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V13"
              stroke="#41456B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.5 1H22.5M22.5 1V8.5M22.5 1L12.5 11"
              stroke="#41456B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.sort}>Sorted by </div>
        <div className={styles.select} ref={select}>
          <div className={styles.selected} onClick={openList}>
            <span>Recommendations </span>
            <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17 1L9 9L1 1"
                stroke="#41456B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className={styles.list} onClick={changeItem}>
            <div className={styles.item}>Newest inventory</div>
            <div className={styles.item}>Lowest price</div>
            <div className={styles.item}>Highest prices</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

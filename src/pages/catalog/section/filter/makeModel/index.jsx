import React, { useState, useCallback } from 'react';

import styles from './index.module.scss';

import { autoMakers } from '../../../data/automakers';
import {
  Audi,
  BMW,
  Chery,
  Chevrolet,
  Chrysler,
  Citroen,
  Ford,
  Honda,
  Hyundai,
  Infiniti,
  Jeep,
  KIA,
  Lexus,
  Mazda,
  MercedesBenz,
  Mitsubishi,
  Nissan,
  Opel,
  Renault,
  Skoda,
  Subaru,
  Tesla,
  Toyota,
  Volkswagen,
  Volvo
} from '../../../data/autoModel';

const MakeModel = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');

  const returnAutoModels = () => {
    let autoModel = null;
    switch (make) {
      case 'Audi':
        autoModel = Audi;
        break;
      case 'BMW':
        autoModel = BMW;
        break;
      case 'Chery':
        autoModel = Chery;
        break;
      case 'Chevrolet':
        autoModel = Chevrolet;
        break;
      case 'Chrysler':
        autoModel = Chrysler;
        break;
      case 'Citroen':
        autoModel = Citroen;
        break;
      case 'Ford':
        autoModel = Ford;
        break;
      case 'Honda':
        autoModel = Honda;
        break;
      case 'Hyundai':
        autoModel = Hyundai;
        break;
      case 'Infiniti':
        autoModel = Infiniti;
        break;
      case 'Jeep':
        autoModel = Jeep;
        break;
      case 'KIA':
        autoModel = KIA;
        break;
      case 'Lexus':
        autoModel = Lexus;
        break;
      case 'Mazda':
        autoModel = Mazda;
        break;
      case 'Mercedes-Benz':
        autoModel = MercedesBenz;
        break;
      case 'Mitsubishi':
        autoModel = Mitsubishi;
        break;
      case 'Nissan':
        autoModel = Nissan;
        break;
      case 'Opel':
        autoModel = Opel;
        break;
      case 'Renault':
        autoModel = Renault;
        break;
      case 'Skoda':
        autoModel = Skoda;
        break;
      case 'Subaru':
        autoModel = Subaru;
        break;
      case 'Tesla':
        autoModel = Tesla;
        break;
      case 'Toyota':
        autoModel = Toyota;
        break;
      case 'Volkswagen':
        autoModel = Volkswagen;
        break;
      case 'Volvo':
        autoModel = Volvo;
        break;

      default:
        autoModel = ['Empty'];
        break;
    }

    return autoModel;
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

  const renderItemsModel = useCallback(() => {
    const autoModel = returnAutoModels();
    const re = new RegExp(`${model}`, 'gmi');
    const items = autoModel
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
            setModel(e.target.innerHTML);
          }
        }}
      >
        {items}
      </div>
    );
  }, [make, model]);

  const renderMakeActiveItems = useCallback(() => {
    let items = null;
    if (autoMakers.includes(make)) {
      items = (
        <div className={styles.activeFilterItem}>
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={e => {
              setMake('');
              setModel('');
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
          {make}
        </div>
      );
    }
    return items;
  }, [make]);

  const renderModelActiveItems = useCallback(() => {
    const autoModel = returnAutoModels();
    let items = null;
    if (autoModel.includes(model)) {
      items = (
        <div className={styles.activeFilterItem}>
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={e => {
              setModel('');
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
          {model}
        </div>
      );
    }
    return items;
  }, [model]);

  const openDropdown = e => {
    if (e.target.classList.contains(styles.dropdownTitle)) {
      const parentNode = e.target.parentNode;
      parentNode.classList.toggle(styles.dropdownActive);
      parentNode.childNodes[1].classList.toggle(styles.activeFilterDisabled);

      if (parentNode.classList.contains(styles.dropdownActive)) {
        parentNode.style = `--heightDrop: auto`;
      } else {
        if (make || model) {
          parentNode.style = `--heightDrop: ${45 + 65}px`;
        } else {
          parentNode.style = `--heightDrop: ${45}px`;
        }
      }
    }
  };
  return (
    <div className={styles.dropdown} style={{ '--heightDrop': '45px' }}>
      <div className={styles.dropdownTitle} onClick={openDropdown}>
        Make, Model
        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 1L9 9L1 1" stroke="#41456B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div className={styles.activeFilter}>
        {renderMakeActiveItems()}
        {renderModelActiveItems()}
      </div>
      <div className={styles.select}>
        <div className={styles.searchWrapper}>
          <label htmlFor="make">Make</label>
          <input
            type="text"
            name="make"
            id="make"
            className={styles.input}
            value={make}
            onChange={e => setMake(e.target.value)}
            onFocus={e => {
              e.target.nextSibling.classList.add(styles.searchPopupActive);
            }}
            onBlur={e => {
              setTimeout(() => {
                e.target.nextSibling.classList.remove(styles.searchPopupActive);
              }, 100);
            }}
            placeholder="Search Make..."
          />
          <div className={styles.searchPopup}>
            {renderItems()}
            <div className={styles.scrollbar}>
              <div className={styles.scrollbarThumb}></div>
            </div>
            <div className={styles.searchPopupOpacity}></div>
          </div>
          <div className={styles.activeFilter}>{renderMakeActiveItems()}</div>
        </div>
        <div className={styles.searchWrapper}>
          <label htmlFor="model">Model</label>
          <input
            type="text"
            name="model"
            id="model"
            className={styles.input}
            onChange={e => setModel(e.target.value)}
            onFocus={e => {
              e.target.nextSibling.classList.add(styles.searchPopupActive);
            }}
            onBlur={e => {
              setTimeout(() => {
                e.target.nextSibling.classList.remove(styles.searchPopupActive);
              }, 100);
            }}
            value={model}
            placeholder="Search Model..."
          />
          <div className={styles.searchPopup}>
            {renderItemsModel()}
            <div className={styles.scrollbar}>
              <div className={styles.scrollbarThumb}></div>
            </div>
            <div className={styles.searchPopupOpacity}></div>
          </div>
          <div className={styles.activeFilter}>{renderModelActiveItems()}</div>
        </div>
      </div>
    </div>
  );
};

export default MakeModel;

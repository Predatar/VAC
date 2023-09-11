import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { Helmet } from 'react-helmet';

import Filter from './section/filter/';
import Main from './section/main';

import styles from './index.module.scss';

const Catalog = ({ setInventory }) => {
  const [filter, setFilter] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setInventory(true);
    setWidth(window.screen.width);
  }, []);

  useEffect(() => {
    return () => {
      setInventory(false);
    };
  }, []);

  /* useEffect(() => {
    if (!filter) {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [filter]); */

  window.addEventListener('resize', () => {
    setWidth(window.screen.width);
  });

  const openFilter = () => {
    if (!filter) {
      setFilter(!filter);
    }
  };

  const closeFilter = () => {
    if (filter) {
      setFilter(!filter);
    }
  };

  return (
    <>
      <Helmet>
        <title>Inventory - VAC</title>
      </Helmet>
      <div className={styles.section}>
        <div className="container">
          <div className={styles.wrapper}>
            {width <= 1186 ? createPortal(<Filter onClick={closeFilter} filter={filter} />, document.body) : <Filter />}
            <Main onClick={openFilter} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;

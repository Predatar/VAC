import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet';

import Filter from './section/filter/';

import styles from './index.module.scss';

const Catalog = ({ setInventory }) => {
  useEffect(() => {
    setInventory(true);
  }, []);

  useEffect(() => {
    return () => {
      setInventory(false);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Inventory - VAC</title>
      </Helmet>
      <div className={styles.section}>
        <div className="container">
          <div className={styles.wrapper}>
            <Filter />
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;

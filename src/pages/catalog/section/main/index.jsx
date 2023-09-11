import React from 'react';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import Search from './search';
import CarCard from '../../../../components/carCard/CarCard';

import styles from './index.module.scss';

import porsche from '../../img/Car/porsche.jpg';
import Mitsubishi from '../../img/Car/Mitsubishi.jpg';
import merc1 from '../../img/Car/merc1.jpg';
import merc2 from '../../img/Car/merc2.jpg';
import merc3 from '../../img/Car/merc3.jpg';
import audi from '../../img/Car/audi.jpg';

const Main = ({onClick}) => {
  return (
    <div className={styles.container}>
      <Search onClick={onClick}/>
      <>
        <ResponsiveMasonry columnsCountBreakPoints={{ 320: 1, 767: 2 }}>
          <Masonry gutter="20px" className={styles.wrapper}>
            <CarCard img={porsche} text={'Porsche Panamera II Turbo S E-Hybrid'} price={'$ 150 000'} />
            <CarCard
              img={Mitsubishi}
              text={'Mitsubishi Outlander III Restyling 3 More datail information'}
              price={'$ 23 500'}
            />
            <CarCard img={merc1} text={'Mercedes-Benz CLA I (C117, X117) 200 More information'} price={'$ 150 000'} />
            <CarCard img={merc2} text={'Mercedes-Benz W124 420'} price={'$ 23 500'} />
            <CarCard img={merc3} text={'Mercedes-Benz E-Class III (W211, S211) Restyling 230'} price={'$ 150 000'} />
            <CarCard img={audi} text={'Audi A7 I (4G) S-tronic'} price={'$ 23 500'} />
          </Masonry>
        </ResponsiveMasonry>
        <div className={styles.loader}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </>
    </div>
  );
};

export default Main;

import React from 'react';

import Article from '../../../../UI/article/Article';

import styles from './index.module.scss';

import art1 from '../../../../img/articles/article1.jpg';
import art2 from '../../../../img/articles/article2.jpg';
import art3 from '../../../../img/articles/article3.jpg';
import art4 from '../../../../img/articles/article4.jpg';
import art5 from '../../../../img/articles/article5.jpg';
import art6 from '../../../../img/articles/article6.jpg';
import art7 from '../../../../img/articles/article7.jpg';
import art8 from '../../../../img/articles/article8.jpg';
import art9 from '../../../../img/articles/article9.jpg';

const FirstSection = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <Article title={'How to save on buying a car? Why is it better to buy from us'} img={art1} to={'/blog/1'} />
          <Article title={'How fast can you order a car in Canada?'} img={art2} to={'/blog/2'} />
          <Article title={'How to save on buying a car? Why is it better to buy from us'} img={art3} to={'/blog/3'} />
          <Article title={'How to save on buying a car? Why is it better to buy from us'} img={art4} to={'/blog/4'} />
          <Article title={'How fast can you order a car in Canada?'} img={art5} to={'/blog/5'} />
          <Article title={'How to save on buying a car? Why is it better to buy from us'} img={art6} to={'/blog/6'} />
          <Article title={'How to save on buying a car? Why is it better to buy from us'} img={art7} to={'/blog/7'} />
          <Article title={'How fast can you order a car in Canada?'} img={art8} to={'/blog/8'} />
          <Article title={'How to save on buying a car? Why is it better to buy from us'} img={art9} to={'/blog/9'} />
        </div>
        <div className={styles.loader}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

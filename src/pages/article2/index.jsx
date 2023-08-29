import React from 'react';

import { Helmet } from 'react-helmet';

import FirstSection from '../article1/section/firstSection';
import SecondSection from './section/secondSection';
import ThirdSection from '../article1/section/thirdSection';

const Article2 = () => {
  return (
    <>
      <Helmet>
        <title>How to save on buying a car? - VAC</title>
      </Helmet>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </>
  );
};

export default Article2;

import React from 'react';
import Heading from '../../components/heading/Heading';
import { Helmet } from 'react-helmet';

import FirstSection from './section/firstSection';
import SecondSection from './section/secondSection';
import ThirdSection from './section/thirdSection';
import Calculator from '../../components/calculator/Calculator';

const Loan = () => {
  return (
    <>
      <Helmet>
        <title>Loan Rates - VAC</title>
      </Helmet>
      <Heading title={'Loan rates'} />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Calculator mtX={220} mtM={156} mtS={78} />F
    </>
  );
};

export default Loan;

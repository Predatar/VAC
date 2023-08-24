import React from 'react';
import { Helmet } from 'react-helmet';
import Heading from '../../components/heading/Heading';
import Calculator from '../../UI/calculator/Calculator';

const CalculatorPage = () => {
  return (
    <>
      <Helmet>
        <title>Calculator - VAC</title>
      </Helmet>
      <Heading title={'Use our free calculator!'} />
      <Calculator mtX={40} mtS={31} />
    </>
  );
};

export default CalculatorPage;

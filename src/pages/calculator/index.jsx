import React from 'react';
import FirstSection from './section/firstSection';
import Calculator from '../../UI/calculator/Calculator';

const CalculatorPage = () => {
  return (
    <>
      <FirstSection />
      <Calculator mtX={40} mtS={31} />
    </>
  );
};

export default CalculatorPage;

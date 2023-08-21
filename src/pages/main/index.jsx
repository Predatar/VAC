import React from 'react';
import FirstSection from './section/firstSection';
import SecondSection from './section/secondSection';
import ThirdSection from './section/thirdSection';
import FouthSection from './section/fouthSection';
import FifthSection from './section/fifthSection';
import SixthSection from './section/sixthSection';
import SeventhSection from './section/seventhSection';

import Calculator from '../../UI/calculator/Calculator';
import EightSection from './section/eightSection';

const MainPage = () => {
  return (
    <>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FouthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <Calculator mtX={220} mtM={159} mtS={80} />
      <EightSection />
    </>
  );
};

export default MainPage;

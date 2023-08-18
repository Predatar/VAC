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
import Footer from '../../components/footer/Footer';

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
      <Calculator />
      <EightSection />
      <Footer />
    </>
  );
};

export default MainPage;

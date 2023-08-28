import React from 'react';
import { Helmet } from 'react-helmet';
import Heading from '../../components/heading/Heading';
import FirstSection from './section/fisrtSection';
import SecondSection from './section/secondSection';
import ThirdSection from './section/thirdSection';
import FouthSeection from './section/fouthSection';
import FifthSection from './section/fifthSection';
import SixthSection from './section/sixthSection';
import SeventhSection from './section/seventhSection';
import EightSection from './section/eightSection';
import Calculator from '../../components/calculator/Calculator';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About us - VAC</title>
      </Helmet>
      <Heading title={'About VAC '} />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FouthSeection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EightSection />
      <Calculator mtX={216} mtM={160} mtS={80} />
    </>
  );
};

export default About;

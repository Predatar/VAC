import React from 'react';

import { Helmet } from 'react-helmet';

import Heading from '../../components/heading/Heading';

import FirstSection from './section/firstSection';

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - VAC</title>
      </Helmet>
      <Heading title={'Our blog'} />
      <FirstSection />
    </>
  );
};

export default Blog;

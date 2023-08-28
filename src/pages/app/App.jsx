import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../../components/header/Header';
import Preloader from '../preloader/Preloader';
import Footer from '../../components/footer/Footer';
const MainPage = lazy(() => import('../main'));
const CalculatorPage = lazy(() => import('../calculator'));
const AboutrPage = lazy(() => import('../about'));
const Loan = lazy(() => import('../loan'));
const Page404 = lazy(() => import('../404'));
const Terms = lazy(() => import('../terms'));
const Privacy = lazy(() => import('../privacy'));
const Blog = lazy(() => import('../blog'));

import './index.scss';

const App = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/calculator">
            <CalculatorPage />
          </Route>
          <Route path="/about">
            <AboutrPage />
          </Route>
          <Route path="/loan-rates">
            <Loan />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/blog/:id">
            <Page404 />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;

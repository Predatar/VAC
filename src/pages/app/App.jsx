import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../../components/header/Header';
import Preloader from '../preloader/Preloader';
import Footer from '../../components/footer/Footer';
const MainPage = lazy(() => import('../main'));
const CalculatorPage = lazy(() => import('../calculator'));

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
          <Route path="/preloader">
            <Preloader />
          </Route>
        </Switch>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;

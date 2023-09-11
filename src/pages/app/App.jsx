import React, { lazy, Suspense, useState } from 'react';
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
const Article1 = lazy(() => import('../article1'));
const Article2 = lazy(() => import('../article2'));
const Video = lazy(() => import('../video'));
const Quiz = lazy(() => import('../quiz'));
const Catalog = lazy(() => import('../catalog'));
const CarPage = lazy(() => import('../carPage'));

import './index.scss';

const App = () => {
  const [footer, setFooter] = useState(false);
  const [inventory, setInventory] = useState(false);

  return (
    <>
      <Suspense fallback={<Preloader />}>
        <Header inventory={inventory} />
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
            <Article1 />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/article">
            <Article2 />
          </Route>
          <Route path="/video">
            <Video />
          </Route>
          <Route path="/quiz">
            <Quiz setFooter={setFooter} />
          </Route>
          <Route path="/catalog">
            <Catalog setInventory={setInventory} />
          </Route>
          <Route path="/carPage">
            <CarPage />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
        <div style={{ display: `${footer ? 'none' : 'block'}` }}>
          <Footer />
        </div>
      </Suspense>
    </>
  );
};

export default App;

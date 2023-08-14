import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../../components/header/Header';
import Preloader from '../preloader/Preloader';
const MainPage = lazy(() => import('../main'));

import './index.scss';

const App = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/second">
            <>Second</>
          </Route>
          <Route path="/preloader">
            <Preloader />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;

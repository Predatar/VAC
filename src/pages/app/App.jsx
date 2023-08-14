import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../../components/header/Header';

import './index.scss';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/second">
          <>Second</>
        </Route>
      </Switch>
    </>
  );
};

export default App;

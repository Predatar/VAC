import React from 'react';

import { Switch, Route } from 'react-router-dom';

import DropDown from '../../UI/dropDown/DropDown';

import './index.scss';

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <DropDown wx={200} item={['Item1', 'Item2']} />
      </Route>
      <Route path="/second">
        <>Second</>
      </Route>
    </Switch>
  );
};

export default App;

import React from 'react';

import { Switch, Route } from 'react-router-dom';

import LinkLiner from '../../UI/links/linkLiner/LinkLiner';

import './index.scss';

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <div className="class">
          <LinkLiner to={'/second'} wx={200}>Liner</LinkLiner>
        </div>
      </Route>
      <Route path="/second">
        <>Second</>
      </Route>
    </Switch>
  );
};

export default App;

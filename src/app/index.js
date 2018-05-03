import React from 'react';
import { hot } from 'react-hot-loader';

import Estimate from './ui/domains/estimate';
import Base from './ui/style/base';
import Store from './store';
import { Router, Route, router } from '../lib/router';

import './index.html';

window.eblock = {
  show(rooftopId, isLong) {
    router().push(isLong ? '/estimate-long' : '/estimate');
  },

  hide() {
    router().push('/');
  },
};

const App = () => (
  <Base>
    <Router>
      <Route index path="/" />
      <Route path="/estimate">
        <Estimate onClose={window.eblock.hide} />
      </Route>
      <Route path="/estimate-long">
        <Estimate onClose={window.eblock.hide} isLong />
      </Route>
      <Route path="/cheese">
        <h1>Cheese</h1>
      </Route>
    </Router>
  </Base>
);

const Root = () => <Store><App /></Store>;

export default hot(module)(Root);

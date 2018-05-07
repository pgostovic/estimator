import React from 'react';
import { hot } from 'react-hot-loader';

import Estimate from './ui/domains/estimate';
import Summary from './ui/domains/summary';
import Base from './ui/style/base';
import Store from './store';
import { Router, Route, router } from '../lib/router';

import './index.html';

window.eblock = {
  show(rooftopId, isLong = false) {
    router().push(`/estimate/${rooftopId}?isLong=${isLong}`);
    // router().push('/summary');
  },

  hide() {
    router().push('/');
  },
};

const App = () => (
  <Base>
    <Router>
      <Route
        path="/estimate/:rooftopId"
        render={({ rooftopId, params: { isLong } }) => (
          <Estimate rooftopId={rooftopId} isLong={isLong === 'true'} onClose={window.eblock.hide} />
        )}
      />
      <Route path="/summary">
        <Summary onClose={window.eblock.hide} />
      </Route>
    </Router>
  </Base>
);

const Root = () => <Store><App /></Store>;

export default hot(module)(Root);

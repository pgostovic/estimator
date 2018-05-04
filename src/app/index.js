import React from 'react';
import { hot } from 'react-hot-loader';

import Estimate from './ui/domains/estimate';
import Base from './ui/style/base';
import Store from './store';
import { Router, Route, router } from '../lib/router';

import './index.html';

window.eblock = {
  show(rooftopId, isLong = false) {
    router().push(`/estimate/${rooftopId}?isLong=${isLong}`);
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
    </Router>
  </Base>
);

const Root = () => <Store><App /></Store>;

export default hot(module)(Root);

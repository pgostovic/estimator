import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';

import Estimate from './ui/domains/estimate';
import Base from './ui/style/base';
import Store from './store';
import { Router, Route } from '../lib/router';
import { setIsOpenAction } from './store/ui/actions';

import { getNow } from './data/system'; // Just tesing the graphql...

import './index.html';

let app = null;

const stateConnect = state => ({
  isOpen: state.ui.isOpen,
});

const dispatchConnect = dispatch => ({
  setIsOpen: isOpen => dispatch(setIsOpenAction(isOpen)),
});

@connect(stateConnect, dispatchConnect)
class App extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    app = this;
  }

  /**
   * Testing graphql and async/await.
   * TODO: remove async and console.log statements.
   */
  async show() {
    const { setIsOpen } = this.props;
    setIsOpen(true);

    try {
      console.log('NOW', await getNow());
    } catch (err) {
      console.log('err', err);
    }
  }

  @autobind
  hide() {
    const { setIsOpen } = this.props;
    setIsOpen(false);
  }

  render() {
    const { isOpen } = this.props;

    if (isOpen) {
      return (
        <Base>
          <Router>
            <Route index path="/estimate">
              <Estimate onClose={this.hide} />
            </Route>
            <Route path="/cheese">
              <h1>Cheese</h1>
            </Route>
          </Router>
        </Base>
      );
    }
    return null;
  }
}

/* global window */

window.eblock = {
  show() {
    app.show();
  },
};

const Root = () => <Store><App /></Store>;

export default hot(module)(Root);

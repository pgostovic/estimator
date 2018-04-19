import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';

import Estimate from './ui/domains/estimate';
import Base from './ui/style/base';
import Store from './store';
import { Router, Route } from '../lib/router';
import { setIsOpenAction, setIsLongAction } from './store/ui/actions';

import './index.html';

let app = null;

const stateConnect = state => ({
  isOpen: state.ui.isOpen,
});

const dispatchConnect = dispatch => ({
  setIsOpen: isOpen => dispatch(setIsOpenAction(isOpen)),
  setIsLong: isLong => dispatch(setIsLongAction(isLong)),
});

@connect(stateConnect, dispatchConnect)
class App extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    setIsLong: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    app = this;
  }

  show(isLong = false) {
    const { setIsOpen, setIsLong } = this.props;

    setIsLong(isLong);
    setIsOpen(true);
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

window.eblock = {
  show(isLong) {
    app.show(isLong);
  },
};

const Root = () => <Store><App /></Store>;

export default hot(module)(Root);

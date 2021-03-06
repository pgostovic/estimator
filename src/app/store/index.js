import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { asyncEventsMiddleware } from '../../lib/redux-util/asyncEvents';
import estimateReducer from './estimate/reducer';
import leadReducer from './lead/reducer';

const reducers = combineReducers({
  estimate: estimateReducer,
  lead: leadReducer,
});

const store = createStore(
  reducers,
  compose(
    applyMiddleware(asyncEventsMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : noop => noop,
  ),
);

const Store = ({ children }) => <Provider store={store}>{children}</Provider>;

Store.propTypes = { children: PropTypes.node.isRequired };

export default Store;

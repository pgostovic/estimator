import makeReducer from '../../../lib/redux-util/makeReducer';
import { types } from './actions';


const defaultState = {
  isOpen: false,
  isLong: false,
};

const { UI_SET_IS_OPEN, UI_SET_IS_LONG } = types;

export default makeReducer({
  [UI_SET_IS_OPEN]: (state, { isOpen }) => ({ ...state, isOpen }),

  [UI_SET_IS_LONG]: (state, { isLong }) => ({ ...state, isLong }),

}, defaultState);

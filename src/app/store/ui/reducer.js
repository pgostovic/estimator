import makeReducer from '../../../lib/redux-util/makeReducer';
import { types } from './actions';


const defaultState = {
  isOpen: false,
};

const { UI_SET_IS_OPEN } = types;

export default makeReducer({
  [UI_SET_IS_OPEN]: (state, action) => (
    { ...state, isOpen: action.isOpen }
  ),
}, defaultState);

import makeReducer from '../../../lib/redux-util/makeReducer';
import { setIsOpenAction } from './actions';

const defaultState = {
  isOpen: false,
};

export default makeReducer({
  [setIsOpenAction().type]: (state, action) => (
    { ...state, isOpen: action.isOpen }
  ),
}, defaultState);

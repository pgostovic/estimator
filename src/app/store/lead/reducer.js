import makeReducer from '../../../lib/redux-util/makeReducer';
import { types } from './actions';
// import './async';

const defaultState = {
  name: null,
  email: null,
  phone: null,
  phoneOverride: null,
};

const {
  SET_LEAD,
} = types;

export default makeReducer({
  [SET_LEAD]: (state, action) => ({ ...state, [action.name]: action.value }),
}, defaultState);

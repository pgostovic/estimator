import makeReducer from '../../../lib/redux-util/makeReducer';
import { types } from './actions';


const defaultState = {
  query: {},
};

const { ESTIMATE_SET_QUERY } = types;

export default makeReducer({
  [ESTIMATE_SET_QUERY]: (state, action) => (
    { ...state, query: { ...state.query, [action.name]: action.value } }
  ),
}, defaultState);

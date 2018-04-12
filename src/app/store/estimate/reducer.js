import makeReducer from '../../../lib/redux-util/makeReducer';
import { setQueryAction } from './actions';


const defaultState = {
  query: {},
};

export default makeReducer({
  [setQueryAction().type]: (state, action) => (
    { ...state, query: { ...state.query, [action.name]: action.value } }
  ),
}, defaultState);

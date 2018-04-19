import makeReducer from '../../../lib/redux-util/makeReducer';
import { types } from './actions';
import './async';

const defaultState = {
  query: {},
  makes: [],
  makesError: null,
  models: [],
  modelsError: null,
  subModels: [],
  subModelsError: null,
};

const {
  SET_ESTIMATE_QUERY,
  MAKES_FETCHED, FETCH_MAKES_ERROR,
  MODELS_FETCHED, FETCH_MODELS_ERROR,
  SUBMODELS_FETCHED, FETCH_SUBMODELS_ERROR,
} = types;

export default makeReducer({
  [SET_ESTIMATE_QUERY]: (state, action) => (
    { ...state, query: { ...state.query, [action.name]: action.value } }
  ),

  [MAKES_FETCHED]: (state, { makes }) => ({ ...state, makes }),
  [FETCH_MAKES_ERROR]: (state, { error }) => ({ ...state, makesError: error }),

  [MODELS_FETCHED]: (state, { models }) => ({ ...state, models }),
  [FETCH_MODELS_ERROR]: (state, { error }) => ({ ...state, modelsError: error }),

  [SUBMODELS_FETCHED]: (state, { subModels }) => ({ ...state, subModels }),
  [FETCH_SUBMODELS_ERROR]: (state, { error }) => ({ ...state, subModelsError: error }),

}, defaultState);

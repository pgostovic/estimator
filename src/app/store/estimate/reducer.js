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
  estimateResults: null,
  estimateResultsError: null,
};

const {
  SET_ESTIMATE_QUERY,
  MAKES_FETCHED, FETCH_MAKES_ERROR,
  MODELS_FETCHED, FETCH_MODELS_ERROR, CLEAR_MODELS,
  SUBMODELS_FETCHED, FETCH_SUBMODELS_ERROR, CLEAR_SUBMODELS,
  ESTIMATE_FETCHED, FETCH_ESTIMATE_ERROR, CLEAR_ESTIMATE,
} = types;

export default makeReducer({
  [SET_ESTIMATE_QUERY]: (state, action) => (
    { ...state, query: { ...state.query, [action.name]: action.value } }
  ),

  [MAKES_FETCHED]: (state, { makes }) => ({ ...state, makes }),
  [FETCH_MAKES_ERROR]: (state, { error }) => ({ ...state, makesError: error }),

  [MODELS_FETCHED]: (state, { models }) => ({ ...state, models }),
  [FETCH_MODELS_ERROR]: (state, { error }) => ({ ...state, modelsError: error }),
  [CLEAR_MODELS]: state => ({ ...state, models: [], modelsError: null }),

  [SUBMODELS_FETCHED]: (state, { subModels }) => ({ ...state, subModels }),
  [FETCH_SUBMODELS_ERROR]: (state, { error }) => ({ ...state, subModelsError: error }),
  [CLEAR_SUBMODELS]: state => ({ ...state, subModels: [], subModelsError: null }),

  [ESTIMATE_FETCHED]: (state, { estimateResults }) => ({ ...state, estimateResults }),
  [FETCH_ESTIMATE_ERROR]: (state, { error }) => ({ ...state, estimateResultsError: error }),
  [CLEAR_ESTIMATE]: state => ({ ...state, estimateResults: null, estimateResultsError: null }),

}, defaultState);

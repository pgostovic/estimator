import { makeEnum } from '../../../lib/enum';

export const types = makeEnum(
  'SET_ESTIMATE_QUERY',
  'FETCH_MAKES', 'MAKES_FETCHED', 'FETCH_MAKES_ERROR',
  'FETCH_MODELS', 'MODELS_FETCHED', 'FETCH_MODELS_ERROR', 'CLEAR_MODELS',
  'FETCH_SUBMODELS', 'SUBMODELS_FETCHED', 'FETCH_SUBMODELS_ERROR', 'CLEAR_SUBMODELS',
  'FETCH_ESTIMATE', 'ESTIMATE_FETCHED', 'FETCH_ESTIMATE_ERROR', 'CLEAR_ESTIMATE',
);

export const setQueryAction = (name, value, text) => ({
  type: types.SET_ESTIMATE_QUERY, name, value, text,
});

export const fetchMakesAction = () => ({ type: types.FETCH_MAKES });
export const makesFetchedAction = makes => ({ type: types.MAKES_FETCHED, makes });
export const fetchMakesErrorAction = error => ({ type: types.FETCH_MAKES_ERROR, error });

export const fetchModelsAction = make => ({ type: types.FETCH_MODELS, make });
export const modelsFetchedAction = models => ({ type: types.MODELS_FETCHED, models });
export const fetchModelsErrorAction = error => ({ type: types.FETCH_MODELS_ERROR, error });
export const clearModelsAction = () => ({ type: types.CLEAR_MODELS });

export const fetchSubModelsAction = (make, model) => ({ type: types.FETCH_SUBMODELS, make, model });
export const subModelsFetchedAction = subModels => ({ type: types.SUBMODELS_FETCHED, subModels });
export const fetchSubModelsErrorAction = error => ({ type: types.FETCH_SUBMODELS_ERROR, error });
export const clearSubModelsAction = () => ({ type: types.CLEAR_SUBMODELS });

export const fetchEstimateAction = (year, make, model, trim, mileage) => ({
  type: types.FETCH_ESTIMATE, year, make, model, trim, mileage,
});
export const estimateFetchedAction = estimateResults => ({ type: types.ESTIMATE_FETCHED, estimateResults });
export const fetchEstimateErrorAction = error => ({ type: types.FETCH_ESTIMATE_ERROR, error });
export const clearEstimateAction = () => ({ type: types.CLEAR_ESTIMATE });

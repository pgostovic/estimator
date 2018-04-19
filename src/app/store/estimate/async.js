import { on, dispatch } from '../../../lib/redux-util/asyncEvents';

import { getMakes, getModels, getSubModels } from '../../data/inventory';
import {
  types,
  makesFetchedAction,
  fetchMakesErrorAction,
  modelsFetchedAction,
  fetchModelsErrorAction,
  subModelsFetchedAction,
  fetchSubModelsErrorAction,
} from './actions';

const { FETCH_MAKES, FETCH_MODELS, FETCH_SUBMODELS } = types;

on(FETCH_MAKES, async () => {
  try {
    const makes = await getMakes();
    dispatch(makesFetchedAction(makes));
  } catch (error) {
    dispatch(fetchMakesErrorAction(error.toString()));
  }
});

on(FETCH_MODELS, async ({ make }) => {
  try {
    const models = await getModels(make);
    dispatch(modelsFetchedAction(models));
  } catch (error) {
    dispatch(fetchModelsErrorAction(error.toString()));
  }
});

on(FETCH_SUBMODELS, async ({ make, model }) => {
  try {
    const subModels = await getSubModels(make, model);
    dispatch(subModelsFetchedAction(subModels));
  } catch (error) {
    dispatch(fetchSubModelsErrorAction(error.toString()));
  }
});

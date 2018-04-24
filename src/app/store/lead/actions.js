import { makeEnum } from '../../../lib/enum';

export const types = makeEnum(
  'SET_LEAD',
);

export const setLeadAction = (name, value) => ({ type: types.SET_LEAD, name, value });

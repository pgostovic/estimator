import { makeEnum } from '../../../lib/enum';

const types = makeEnum('ESTIMATE_SET_QUERY');

export const setQueryAction = (name, value) => ({ type: types.ESTIMATE_SET_QUERY, name, value });

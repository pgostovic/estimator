import { makeEnum } from '../../../lib/enum';

export const types = makeEnum('UI_SET_IS_OPEN');

export const setIsOpenAction = isOpen => ({ type: types.UI_SET_IS_OPEN, isOpen });

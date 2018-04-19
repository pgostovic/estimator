import { makeEnum } from '../../../lib/enum';

export const types = makeEnum('UI_SET_IS_OPEN', 'UI_SET_IS_LONG');

export const setIsOpenAction = isOpen => ({ type: types.UI_SET_IS_OPEN, isOpen });

export const setIsLongAction = isLong => ({ type: types.UI_SET_IS_LONG, isLong });

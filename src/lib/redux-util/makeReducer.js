/**
 * Simple utility that lets you write your reducer as an object with action
 * type keys and reducer function values instead of the more traditional
 * switch/case way.
 */

export default (reducerObj, defaultState) =>
  (state = defaultState, action) =>
    (reducerObj[action.type] || (s => s))(state, action);

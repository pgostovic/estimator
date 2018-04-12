
export default (reducerObj, defaultState) =>
  (state = defaultState, action) =>
    (reducerObj[action.type] || (s => s))(state, action);

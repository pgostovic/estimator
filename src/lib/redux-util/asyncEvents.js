const fnsByType = {};
const dispatchInitBuffer = [];
let storeDispatch = null;

export const asyncEventsMiddleware = store => {
  storeDispatch = store.dispatch;

  dispatchInitBuffer.forEach(action => {
    storeDispatch(action);
  });

  return next => action => {
    (fnsByType[action.type] || []).forEach(fn => {
      fn(action);
    });
    return next(action);
  };
};

export const dispatch = action => {
  if (storeDispatch) {
    storeDispatch(action);
  } else {
    dispatchInitBuffer.push(action);
  }
};

export const on = (type, fn) => {
  if (!fnsByType[type]) {
    fnsByType[type] = [];
  }

  const fns = fnsByType[type];
  if (!fns.includes(fn)) {
    fns.push(fn);
  }
};

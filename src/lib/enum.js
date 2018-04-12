export const makeEnum = (...args) => {
  const enumObj = {};

  if (args.length === 1 && typeof args[0] === 'object') {
    const obj = args[0];
    Object.keys(obj).forEach(k => {
      enumObj[k.toString()] = obj[k];
    });
  } else {
    args.forEach(k => {
      enumObj[k.toString()] = k;
    });
  }

  return Object.freeze(enumObj);
};

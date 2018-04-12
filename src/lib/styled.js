import styled, { injectGlobal as injectGlobalOrig } from 'styled-components';

const wrap = args => {
  const comps = args[0];
  const firstComp = comps[0];
  const lastComp = comps[comps.length - 1];

  const wrappedComps = [
    `#${__APP__.root} & { ${firstComp}`,
    ...comps.slice(1, -1),
    `${lastComp} }`,
  ];

  return [wrappedComps, ...args.slice(1)];
};

export default new Proxy({}, {
  get(obj, prop) {
    return (...args) => styled[prop].apply(null, wrap(args));
  },
});

export const injectGlobal = injectGlobalOrig;

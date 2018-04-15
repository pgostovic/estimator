/**
 * This is a wrapper around Styled Components that prefixes the generated
 * selectors with the configured app root selector. This is needed to accomodate
 * the fairly specific requirement of embedding in a 3rd party website. In order
 * to quarantine this app's style, a scoped "css reset" is done from the
 * configured app root as follows:
 *
 *    #${__APP__.root} {
 *      ...reset css code...
 *    }
 * Without the applying this prefixed wrapper, the specificity of the styled
 * components css would be such that the reset css took precendence. This
 * wrapper allows styles to be overridden without required the !important
 * directive.
 */

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

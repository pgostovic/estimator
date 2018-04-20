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

import * as sc from 'styled-components';

const { injectGlobal, default: styled } = sc;

const wrap = (...args) => {
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

const wrappedStyled = (...args) => (...args2) => styled(...args)(...wrap(...args2));

Object.keys(styled).forEach(key => {
  wrappedStyled[key] = wrappedStyled(key);
});

export default wrappedStyled;

Object.keys(sc).filter(key => key !== 'default').forEach(key => {
  exports[key] = sc[key];
});

injectGlobal`
  #${__APP__.root} {
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
      background: initial;
      color: initial;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
  }
`;

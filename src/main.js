// Polyfills that give us IE9 and up
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const edgtRoot = window.document.createElement('div');
edgtRoot.id = __APP__.root;
window.document.body.appendChild(edgtRoot);

ReactDOM.render(<App />, edgtRoot);

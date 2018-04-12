import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const eblockRoot = window.document.createElement('div');
eblockRoot.id = __APP__.root;
window.document.body.appendChild(eblockRoot);

ReactDOM.render(<App />, eblockRoot);

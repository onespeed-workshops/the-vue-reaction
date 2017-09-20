import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function main(RootApp = App) {
  ReactDOM.render(<RootApp />, document.getElementById('root'));
}

switch (document.readyState) {
 case 'loading':
   document.addEventListener('DOMContentLoaded', _domReadyHandler, false)
   break
 case 'interactive':
 case 'complete':
 default:
   main()
}

function _domReadyHandler() {
  document.removeEventListener('DOMContentLoaded', _domReadyHandler, false)
  main()
}

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    main(NextApp)
  })
}

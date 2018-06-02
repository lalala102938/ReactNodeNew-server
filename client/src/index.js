import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { browserHistory } from 'react-router'; // importing from 'react-router'
// import thunk from 'redux-thunk';
// import {composeWithDevTools} from 'redux-devtools-extension';

import Routes from './routes';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);

registerServiceWorker();

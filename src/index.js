import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootRedux from './rootRedux.js'

import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootRedux);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root')
);
serviceWorker.unregister();

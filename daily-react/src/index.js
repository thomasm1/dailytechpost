import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesDaily from './routes';

import store from './reducers/store';
import {   applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import promiseMiddleware from 'redux-promise';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
 
// const createStoreWithMiddleware = applyMiddleware(promiseMiddleware) ;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RoutesDaily />
  </Provider>
);

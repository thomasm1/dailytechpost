import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes';

import store from './state/reducers/store'; 
import { Provider } from 'react-redux'; 
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
 
// const createStoreWithMiddleware = applyMiddleware(promiseMiddleware) ;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

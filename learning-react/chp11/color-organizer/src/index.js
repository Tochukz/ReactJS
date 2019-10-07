import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import createStore from './store';

import './index.css';
const store = createStore();

ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <App />  
      </HashRouter>
    </Provider>, document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
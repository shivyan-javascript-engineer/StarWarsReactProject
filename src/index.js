import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import reducers from './components/store/reducers';
import Routes from './Routes/routes';
import { IS_LOGGED_IN } from './components/store/actions/types';

const store = createStore(reducers, {}, applyMiddleware(thunk));


if (localStorage.getItem('token')) {
  store.dispatch({ type: IS_LOGGED_IN, payload: true });
}
// localStorage.getItem('token') && store.dispatch({ type: IS_LOGGED_IN, payload: true });

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

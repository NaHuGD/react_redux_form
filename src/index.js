import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// redux
import store from './redux/store.js'
// react redux
import { Provider } from 'react-redux'

store.subscribe(() => { console.log('更新', store.getState()) })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
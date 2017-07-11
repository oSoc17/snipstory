import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store, { history } from '../redux/store';

const Root = () =>
  <Provider store={store}>
    <App history={history} />
  </Provider>;

export default Root;

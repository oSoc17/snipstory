import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { rootReducer } from './modules';
import thunk from 'redux-thunk';

export const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];

const store = createStore(
  connectRouter(history)(rootReducer),
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;

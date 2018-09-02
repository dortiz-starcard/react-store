import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './modules/reducers';

const initialState = {

}

export function initializeStore (initialState = initialState) {
  return createStore(reducer, initialState, composeWithDevTools(/* other middlewares here */));
}

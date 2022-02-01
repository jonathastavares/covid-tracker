import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import countriesReducer from './data/countries';
import regionsReducer from './data/regions';
// Import reducers here

const reducer = combineReducers({
  countriesReducer,
  regionsReducer,

  // Add reducers here
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

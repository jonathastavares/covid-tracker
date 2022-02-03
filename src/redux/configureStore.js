import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import countryReducer from './data/country';
// Import reducers here

const reducer = combineReducers({
  countryReducer,

  // Add reducers here
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

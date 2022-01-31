import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import narrativaReducer from './data/narrativa';
// Import reducers here

const reducer = combineReducers({
  narrativaReducer,
  // Add reducers here
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

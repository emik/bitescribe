// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import bites from './bites';

const rootReducer = combineReducers({
  counter,
  bites,
  router
});

export default rootReducer;

import { combineReducers } from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import home from 'Reducer/home.js';

const rootReducers = combineReducers({
  home,
  routing
});

export default rootReducers;

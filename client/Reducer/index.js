import { combineReducers } from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import home from 'Reducer/home.js';
import heroes from 'Reducer/heroes.js';

const rootReducers = combineReducers({
  home,
  heroes,
  routing
});

export default rootReducers;

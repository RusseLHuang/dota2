import {CONSTANT} from 'Constant/index.js';

export default (state = {
  isLoading : false,
  isError : null,
  sentinel_str : [],
  sentinel_agi : [],
  sentinel_int : [],
  scourge_str : [],
  scourge_agi : [],
  scourge_int : []
}, action) => {
  switch (action.type) {
    case CONSTANT.FETCH_HEROES :
      return {...state, isLoading : true};
    case CONSTANT.FETCH_HEROES_FAILED :
      return {...state, isLoading : false, isError : action.err};
    case CONSTANT.FETCH_HEROES_SUCCESS:
      return {...state, isLoading : false, sentinel_str : action.sentinel_str, sentinel_agi : action.sentinel_agi, sentinel_int : action.sentinel_int,
        scourge_str : action.scourge_str, scourge_agi : action.scourge_agi, scourge_int : action.scourge_int};
    default :
      return state;
  }
}

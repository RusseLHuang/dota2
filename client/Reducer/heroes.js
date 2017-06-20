import { CONSTANT } from 'Constant/index.js';

export default (state = {
  isLoading : false,
  isError : null,
  heroes_list : [],
  onHover_Hero : "Choose Your Hero",
}, action) => {
  switch (action.type) {
    case CONSTANT.FETCH_HEROES :
      return {...state, isLoading : true};
    case CONSTANT.FETCH_HEROES_FAILED :
      return {...state, isLoading : false, isError : action.err};
    case CONSTANT.FETCH_HEROES_SUCCESS:
      return {...state, isLoading : false, heroes_list : action.payload};
    case CONSTANT.SET_ONHOVER_HERO :
      return {...state, onHover_Hero : action.payload};
    default :
      return state;
  }
}

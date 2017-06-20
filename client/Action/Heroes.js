import request from 'superagent';
import {CONSTANT} from 'Constant';
const url = `http://localhost:8868/api/heroes`;

export const fetchHeroes = () => {

  return dispatch => {
    dispatch({
      type : CONSTANT.FETCH_HEROES
    });

    return new Promise((resolve, reject) => {
      request.get(url)
      .end((err,res) => {
        if (!!err) {
          dispatch({type : CONSTANT.FETCH_HEROES_FAILED, error : err})
          return reject(new Error(err));
        } else {
          let { data } = res.body;
          dispatch({type : CONSTANT.FETCH_HEROES_SUCCESS, payload : data});
          return resolve();
        }
      })
    });
  }
}

export const setCurrentHoverHero = (data) => {
  return dispatch => {
    dispatch({
      type : CONSTANT.SET_ONHOVER_HERO,
      payload : data
    });
  }
}

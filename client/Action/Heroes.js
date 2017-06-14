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
          const sentinel_str = data.filter(filterSentinelStrength);
          const sentinel_agi = data.filter(filterSentinelAgility);
          const sentinel_int = data.filter(filterSentinelIntelligence);
          const scourge_str = data.filter(filterScourgeStrength);
          const scourge_agi = data.filter(filterScourgeAgility);
          const scourge_int = data.filter(filterScourgeIntelligence);
          console.log(sentinel_str[0]);
          dispatch({type : CONSTANT.FETCH_HEROES_SUCCESS, sentinel_str, sentinel_agi,
            sentinel_int, scourge_str, scourge_agi, scourge_int
          });
          return resolve();
        }
      })
    });
  }
}

const filterSentinelStrength = (data) => {
  return data.team == "sentinel" && data.attr == "strength";
}
const filterSentinelAgility = (data) => {
  return data.team == "sentinel" && data.attr == "agility";
}
const filterSentinelIntelligence = (data) => {
  return data.team == "sentinel" && data.attr == "intelligence";
}
const filterScourgeStrength = (data) => {
  return data.team == "scourge" && data.attr == "strength";
}
const filterScourgeAgility = (data) => {
  return data.team == "scourge" && data.attr == "agility";
}
const filterScourgeIntelligence = (data) => {
  return data.team == "scourge" && data.attr == "intelligence";
}

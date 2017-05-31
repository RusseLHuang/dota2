import { CONSTANT } from 'Constant/index.js';

export default (state = {
  default : null
},action) => {
  switch (action.type) {
    case CONSTANT.test:
      return state;
    default:
      return state;
  }
}

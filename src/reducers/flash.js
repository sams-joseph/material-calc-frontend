import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../actions/types';
import shortid from 'shortid';


function flash(state = {}, action) {
  switch(action.type) {
    case ADD_FLASH_MESSAGE:
      return Object.assign({}, state, {
        id: shortid.generate(),
        type: action.message.type,
        text: action.message.text
      });

    case DELETE_FLASH_MESSAGE:
        return {};

    default: return state;
  }
}

export default flash;

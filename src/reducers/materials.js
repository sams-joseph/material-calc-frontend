import { SET_MATERIALS } from '../actions/types';


function materials(state = [], action) {
  switch(action.type) {
    case SET_MATERIALS:
      return action.materials;
    default: return state;
  }
}


export default materials;

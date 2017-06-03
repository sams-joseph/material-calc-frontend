import { SET_CURRENT_USER } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {}
};

function user(state = initialState, action = {}) {
  switch(action.type) {
    case SET_CURRENT_USER:
      return Object.assign({}, state, {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      });
    default: return state;
  }
}


export default user;

import { SET_CATEGORIES, LOADING_CATEGORIES, ERROR_CATEGORIES } from '../actions/types';

const INITIAL_STATE = {
  isLoading: false,
  categories: [],
  message: '',
  error: false
};

function categories(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_CATEGORIES:
      return Object.assign({}, state, {
        isLoading: false,
        categories: action.categories
      });
    case LOADING_CATEGORIES:
      return Object.assign({}, state, {
        isLoading: true,
        message: action.message
      });
    case ERROR_CATEGORIES:
      return action.message;
    default: return state;
  }
}

export default categories;

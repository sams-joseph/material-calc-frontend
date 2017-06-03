import { combineReducers } from 'redux';

import categories from './categories';
import materials from './materials';
import flash from './flash';
import user from './authorization';

export default combineReducers({
  categories,
  materials,
  flash,
  user
});

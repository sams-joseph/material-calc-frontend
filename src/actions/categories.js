import axios from 'axios';
import { addFlashMessage } from './flash';

import { SET_CATEGORIES, LOADING_CATEGORIES, ERROR_CATEGORIES, BASE_URL } from './types';


export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    categories
  }
}

export function loadingCategories(message) {
  return {
    type: LOADING_CATEGORIES,
    message
  }
}

export function errorCategories(message) {
  return {
    type: ERROR_CATEGORIES,
    message
  }
}

export function getCategories() {
  return dispatch => {
    dispatch(loadingCategories('loading'));
    axios.get(`${BASE_URL}/categories`)
      .then(response => {
        if(response.status !== 200) {
          dispatch(addFlashMessage({ type: 'error', text: 'Error retrieving information from database.'}));
        }

        dispatch(setCategories(response.data.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(addFlashMessage('Error retreiving information from database.'));
      });
  }
}

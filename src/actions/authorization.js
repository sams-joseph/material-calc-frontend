import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { addFlashMessage } from './flash';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { SET_CURRENT_USER, BASE_URL } from './types';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
    dispatch(addFlashMessage({ type: 'success', text: 'You have been logged out.'}))
  }
}

export function login(data) {
  return dispatch => {
    return axios.post(`${BASE_URL}/login`, data).then(res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
      dispatch(addFlashMessage({ type: 'success', text: 'You have been logged in.'}))
    });
  }
}

export function checkLoginExpiration(expiration) {
  return dispatch => {
    if(expiration < Math.floor(Date.now() / 1000)) return true;
    return false;
  }
}

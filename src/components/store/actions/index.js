import Axios from 'axios';
import { IS_LOGGED_IN } from './types';
import { API_URL } from '../../../config/constants';

export const loginAPI = (username, password, cb) => (dispatch) => {
  Axios.post(`${API_URL}/public/users/login`, { username, password })
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      dispatch({
        type: IS_LOGGED_IN,
        payload: true,
      });
      cb('/search');
    })
    .catch((err) => {
      console.log(err, 'login Error');
    });
};



export const searchApi = () => (dispatch) => {
  Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(() => {
      dispatch({
        type: IS_LOGGED_IN,
        payload: true,
      });
    })
    .catch((err) => {
      console.log(err, 'login Error');
    });
};

import Axios from 'axios';
import { IS_LOGGED_IN } from './types';
import { API_URL } from '../../../config/constants';

export const loginAPI = (username, password, cb, loader, errorLogging) => (dispatch) => {
  Axios.post(`${API_URL}/public/users/login`, { username, password })
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      dispatch({
        type: IS_LOGGED_IN,
        payload: true,
      });
      Axios.interceptors.request.use((config) => {
        const { token } = response.data;
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      });
      cb('/search');
    })
    .catch((err) => {
      console.log(err, 'login Error');
      loader(false);
      errorLogging(true);
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

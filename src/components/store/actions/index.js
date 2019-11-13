import Axios from 'axios';
import { IS_LOGGED_IN } from './types';

export const loginAPI = () => (dispatch) => {
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

export const something = () => (dispatch) => {
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

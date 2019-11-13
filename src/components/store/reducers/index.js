import { combineReducers } from 'redux';
import loginReducer from './Auth/login';

export default combineReducers({
  login: loginReducer,
});

import { combineReducers } from 'redux';
import { counter } from './index.redux';
import { auth } from './auth.redux';
import { count } from './home.redux';

export default combineReducers({ counter, auth, count});
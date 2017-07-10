import { combineReducers } from 'redux';
import { reducer as user } from './user';
import { reducer as room } from './room';

export const rootReducer = combineReducers({
  user,
  room
});

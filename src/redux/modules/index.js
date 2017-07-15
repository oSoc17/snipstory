import { combineReducers } from 'redux';
import { reducer as user } from './user';
import { reducer as room } from './room';
import { reducer as storyselect } from './home';
import { reducer as toast } from './toast';

export const rootReducer = combineReducers({
  user,
  room,
  storyselect,
  toast
});

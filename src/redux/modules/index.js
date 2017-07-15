import { combineReducers } from 'redux';
import { reducer as user } from './user';
import { reducer as room } from './room';
import { reducer as form } from 'redux-form';
import { reducer as storyselect } from './home';

export const rootReducer = combineReducers({
  user,
  room,
  form,
  storyselect
});

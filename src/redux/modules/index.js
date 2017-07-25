import { combineReducers } from 'redux';
import { reducer as user } from './user';
import { reducer as room } from './room';
import { reducer as form } from 'redux-form';
import { reducer as storyselect } from './home';
import { reducer as toast } from './toast';
import { reducer as modal } from './modal';
import { reducer as suggestions } from './suggestions';
import { reducer as classes } from './classes';
import { reducer as creation } from './creation';
import { reducer as knutseltips } from './knutseltips';
import { reducer as snipper } from './snipper';
import { reducer as snippers } from './snippers';

export const rootReducer = combineReducers({
  user,
  room,
  storyselect,
  toast,
  modal,
  form,
  suggestions,
  classes,
  creation,
  knutseltips,
  snipper,
  snippers
});

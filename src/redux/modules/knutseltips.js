import { actionTypes } from '../actions';

const initialState = {
  error: '',
  tips: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.fetchKnutselTipsStarted:
      return state;
    case actionTypes.fetchKnutselTipsFulfilled:
      return Object.assign({}, state, {
        tips: action.knutselTips
      });
    case actionTypes.fetchKnutselTipsRejected:
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
};

import { actionTypes } from '../actions';

const initialState = {
  error: '',
  tips: null,
  isFetching: true
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.fetchKnutselTipsStarted:
      return Object.assign({}, state, {
        isFetching: true
      });
    case actionTypes.fetchKnutselTipsFulfilled:
      return Object.assign({}, state, {
        tips: action.knutselTips,
        isFetching: false
      });
    case actionTypes.fetchKnutselTipsRejected:
      return Object.assign({}, state, {
        error: action.error,
        isFetching: false
      });
    default:
      return state;
  }
};

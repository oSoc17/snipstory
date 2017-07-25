import { actionTypes } from '../actions';

const initialState = {
  error: '',
<<<<<<< HEAD
  tips: null,
  isFetching: true
=======
  tips: [],
  isFetching: false
>>>>>>> 4779bd47826f1e44538921fb7e1c9af8af75e75f
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

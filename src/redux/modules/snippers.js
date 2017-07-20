import { actionTypes } from '../actions';

const initialState = {
  randomSnippers: null,
  isLoading: true,
  snippers: null,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.fetchSnippersStarted:
      return Object.assign({}, state, { isLoading: true });
    case actionTypes.fetchSnippersFulfilled:
      return Object.assign({}, state, {
        snippers: action.snippers,
        isLoading: false
      });
    case actionTypes.fetchRandomSnippersFulfilled:
      return Object.assign({}, state, {
        randomSnippers: action.snippers,
        isLoading: false
      });
    case actionTypes.fetchSnippersError:
      return Object.assign({}, state, {
        error: action.error,
        isLoading: false
      });
    default:
      return state;
  }
};

import { actionTypes } from '../actions';

const initialState = {
  suggestions: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.fetchSuggestionsFulfilled:
      return Object.assign({}, state, {
        suggestions: action.data
      });
    case actionTypes.fetchRandomStoriesRejected:
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
};

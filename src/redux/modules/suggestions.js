import { actionTypes } from '../actions';

const initialState = {
  suggestions: null,
  randomsSelected: false
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
    case actionTypes.getRandomSuggestionsFulfilled:
      return Object.assign({}, state, {
        suggestions: action.suggestions,
        randomsSelected: true
      });
    case actionTypes.getRandomSuggestionsStarted:
      return Object.assign({}, state, {
        randomsSelected: false
      });
    default:
      return state;
  }
};

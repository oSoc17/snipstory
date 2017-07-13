import { actionTypes } from '../actions';

const initialState = {
  randomStories: null,
  isLoading: false,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.fetchRandomStoriesStarted:
      return Object.assign({}, state, { isLoading: true });
    case actionTypes.fetchRandomStoriesFulfilled:
      return Object.assign({}, state, {
        isLoading: false,
        randomStories: action.stories
      });
    case actionTypes.fetchRandomStoriesRejected:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
};

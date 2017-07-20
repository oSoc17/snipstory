import { actionTypes } from '../actions';

const initialState = {
  isLoading: true,
  snipper: null,
  error: null,
  notFound: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.fetchSnipperStarted:
      return Object.assign({}, state, { isLoading: true });
    case actionTypes.fetchSnipperFulfilled:
      return Object.assign({}, state, {
        snipper: action.snipper,
        isLoading: false
      });
    case actionTypes.fetchSnipperError:
      return Object.assign({}, state, {
        error: action.error,
        isLoading: false
      });
    default:
      return state;
  }
};

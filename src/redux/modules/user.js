import { actionTypes } from '../actions';

const initialState = {
  authPending: false,
  isAuthorized: false,
  uid: '',
  displayName: '',
  email: '',
  error: null,
  initial: true
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.authStarted:
      return Object.assign({}, state, { authPending: true, initial: false });
    case actionTypes.logout:
      return { ...initialState, initial: false };
    case actionTypes.authFulfilled:
      return Object.assign({}, state, {
        ...action.user,
        isAuthorized: true,
        authPending: false
      });
    case actionTypes.authRejected:
      return Object.assign({}, state, {
        error: action.error,
        isAuthorized: false,
        authPending: false
      });
    default:
      return state;
  }
};

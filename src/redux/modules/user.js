import { actionTypes } from '../actions';

const initialState = {
  authPending: false,
  isAuthorized: false,
  uid: '',
  displayName: '',
  email: '',
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.authStarted:
      return Object.assign({}, state, { authPending: true });
    case actionTypes.logout:
      return Object.assign({}, initialState);
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

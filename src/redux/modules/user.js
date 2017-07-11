import { actionTypes } from '../actions';

const initialState = {
  authPending: true,
  isAuthorized: false,
  id: '',
  name: '',
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.logout:
      return Object.assign({}, initialState, { authPending: false });
    case actionTypes.fetchUserAuthFulfilled:
      return Object.assign({}, state, {
        ...action.user,
        isAuthorized: true,
        authPending: false
      });
    case actionTypes.fetchUserAuthRejected:
      return Object.assign({}, state, {
        error: action.error,
        isAuthorized: false,
        authPending: false
      });
    default:
      return state;
  }
};

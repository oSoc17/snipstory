import { actionTypes } from '../actions';

const initialState = {
  listener: null,
  classes: null,
  isPending: false,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.startListenForClassesChange:
      return { ...state, isPending: true };
    case actionTypes.receiveClasses:
      return { ...state, classes: action.classes, isPending: false };
    case actionTypes.receiveClassesError:
      return { ...state, isPending: false, error: action.error };
    case actionTypes.setClassesListener:
      return { ...state, listener: action.listener };
    default:
      return state;
  }
};

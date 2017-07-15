import { actionTypes } from '../actions';

const initialState = {
  activeModalId: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.showModal:
      return Object.assign({}, state, { activeModalId: action.id });
    case actionTypes.destroyModal:
      return initialState;
    default:
      return state;
  }
};

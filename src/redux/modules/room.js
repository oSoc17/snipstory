import { actionTypes } from '../actions';

const initialState = {};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.test:
      return state;
    default:
      return state;
  }
};

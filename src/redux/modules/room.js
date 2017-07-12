import { actionTypes } from '../actions';

const initialState = {
  id: '',
  name: '',
  period: '',
  modules: null,
  tags: null,
  isLoading: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

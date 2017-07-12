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
    case actionTypes.selectStory:
      return Object.assign({}, state, action.story);
    default:
      return state;
  }
};

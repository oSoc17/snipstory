import { actionTypes } from '../actions';

const initialState = {
  id: '',
  name: '',
  period: '',
  modules: null,
  tags: null,
  isLoading: false,
  isValidCode: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.selectStory:
      return Object.assign({}, state, action.story);
    case actionTypes.checkingTeacherCode:
      return Object.assign({}, state, { isCheckingCode: true });
    case actionTypes.checkTeacherCodeFulfilled:
      return Object.assign({}, state, {
        isValidCode: true,
        classId: action.classId,
        userId: action.userId
      });
    case actionTypes.checkTeacherCodeRejected:
      return Object.assign({}, state, {
        isValidCode: false,
        error: action.error
      });
    default:
      return state;
  }
};

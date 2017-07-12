import { actionTypes } from '../actions';

const initialState = {
  id: '',
  name: '',
  period: '',
  modules: null,
  tags: null,
  isLoading: false,
  isCheckingCode: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.selectStory:
      return Object.assign({}, state, action.story);
    case actionTypes.checkingTeacherCode:
      return Object.assign({}, state, { isCheckingCode: true });
    case actionTypes.checkTeacherCodeFulfilled:
      return Object.assign({}, state, {
        isCheckingCode: false,
        classId: action.classId,
        userId: action.userId
      });
    case actionTypes.checkTeacherCodeRejected:
      return Object.assign({}, state, {
        isCheckingCode: false,
        error: action.error
      });
    default:
      return state;
  }
};

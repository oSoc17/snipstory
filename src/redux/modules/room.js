import { actionTypes } from '../actions';

const initialState = {
  id: '',
  name: '',
  period: '',
  modules: null,
  tags: null,
  isLoading: false,
  isValidCode: false,
  isFetchingData: true
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
    case actionTypes.createRoomStarted:
      return Object.assign({}, state, {
        isLoading: true
      });
    case actionTypes.createRoomFulfilled:
      return Object.assign({}, state, {
        id: action.id
      });
    case actionTypes.createRoomRejected:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    case actionTypes.fetchRoomDataStarted:
      return Object.assign({}, state, {
        isFetchingData: true,
        error: ''
      });
    case actionTypes.fetchRoomDataFulfilled:
      return Object.assign({}, state, {
        isFetchingData: false,
        ...action.newRoom
      });
    case actionTypes.fetchRoomDataRejected:
      return Object.assign({}, state, {
        isFetchingData: false,
        error: action.error.message
      });
    default:
      return state;
  }
};

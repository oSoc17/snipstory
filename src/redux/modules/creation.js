import { actionTypes } from '../actions';

const initialState = {
  uploading: false,
  uploadFailed: false,
  error: null,
  photoURL: '',
  contentType: '',
  description: '',
  creators: [],
  storyId: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.uploadFileStarted:
      return Object.assign({}, state, {
        uploading: true
      });
    case actionTypes.uploadFileFulfilled:
      return Object.assign(
        {},
        state,
        {},
        {
          uploading: false,
          uploadFailed: false,
          photoURL: action.photoURL,
          contentType: action.contentType,
          creators: action.creators,
          storyId: action.storyId
        }
      );
    case actionTypes.uploadFileRejected:
      return Object.assign({}, state, {
        uploadFailed: true,
        uploading: false,
        error: action.error
      });
    case actionTypes.addDescriptionToCreationFulfilled:
      return Object.assign({}, state, {
        description: action.description
      });
    default:
      return state;
  }
};

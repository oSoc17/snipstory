import { actionTypes } from '../actions';

const initialState = {
  uploading: false,
  uploadFailed: false,
  error: null,
  photoURL: '',
  contentType: '',
  description: '',
  creators: '',
  storyId: '',
  fileType: '',
  isSubmitted: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.uploadFileStarted:
      return Object.assign({}, state, { uploading: true });
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
          storyId: action.storyId,
          fileType: action.fileType
        }
      );
    case actionTypes.uploadFileRejected:
      return Object.assign({}, state, {
        uploadFailed: true,
        uploading: false,
        error: action.error
      });
    case actionTypes.sendCreationFulfilled:
      return Object.assign({}, state, {
        ...action.creation,
        isSubmitted: true
      });
    case actionTypes.addDescriptionToCreationFulfilled:
      return Object.assign({}, state, { description: action.description });
    case actionTypes.addCreatorsToCreationFulfilled:
      return Object.assign({}, state, { creators: action.creators });
    default:
      return state;
  }
};

import { actionTypes } from '../actions';

const initialState = {
  uploading: false,
  uploadFailed: false,
  error: null,
  downloadURLs: []
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
          downloadURLs: action.downloadURLs
        }
      );
    case actionTypes.uploadFileRejected:
      return Object.assign({}, state, {
        uploadFailed: true,
        uploading: false,
        error: action.error
      });
    default:
      return state;
  }
};

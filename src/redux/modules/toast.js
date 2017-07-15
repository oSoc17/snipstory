import { actionTypes } from '../actions';
import { STATUS } from '../../constants';

const initialState = {
  toastActive: false,
  timeout: 3000,
  text: '',
  status: STATUS.SUCCESS,
  actionText: '',
  onAction: () => null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.showToast:
      return Object.assign({}, state, { toastActive: true, ...action.toast });
    case actionTypes.destroyToast:
      return initialState;
    default:
      return state;
  }
};

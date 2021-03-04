import {
  OPEN_ERROR_MODAL_WINDOW,
  CLOSE_ERROR_MODAL_WINDOW,
  GET_ERROR_BODY,
  ErrorModalState,
  ModalErrorActionTypes
} from '../action/ModalErrorTypes';

const initialState: ErrorModalState = {
  opened: false,
  error: {}
};

export const errorModalReducer = (
  state = initialState,
  action: ModalErrorActionTypes
): ErrorModalState => {
  switch (action.type) {
    case OPEN_ERROR_MODAL_WINDOW:
      return { ...state, opened: true };
    case CLOSE_ERROR_MODAL_WINDOW:
      return { ...state, opened: false };
    case GET_ERROR_BODY:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

import {
  OPEN_ERROR_MODAL_WINDOW,
  CLOSE_ERROR_MODAL_WINDOW,
  ModalErrorActionTypes,
  GET_ERROR_BODY
} from './ModalErrorTypes';

export const errorInizialized = <T>(error: T) => {
  return dispatch => {
    dispatch(getErrorBody(error));
    dispatch(openErrorModalWindow());
  };
};

export const openErrorModalWindow = (): ModalErrorActionTypes => ({
  type: OPEN_ERROR_MODAL_WINDOW
});

export const closeErrorModalWindow = (): ModalErrorActionTypes => ({
  type: CLOSE_ERROR_MODAL_WINDOW
});

export const getErrorBody = <T>(error: T): ModalErrorActionTypes => ({
  type: GET_ERROR_BODY,
  error
});

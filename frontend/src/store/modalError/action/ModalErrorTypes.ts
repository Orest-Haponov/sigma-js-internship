export const OPEN_ERROR_MODAL_WINDOW = 'OPEN_ERROR_MODAL_WINDOW';
export const CLOSE_ERROR_MODAL_WINDOW = 'CLOSE_ERROR_MODAL_WINDOW';
export const GET_ERROR_BODY = 'GET_ERROR_BODY';

export type ErrorModalState = {
  opened: boolean;
  error;
};

export type OpenErrorModalWindowActionType = {
  type: typeof OPEN_ERROR_MODAL_WINDOW;
};

export type CloseErrorModalWindowActionType = {
  type: typeof CLOSE_ERROR_MODAL_WINDOW;
};

export type GetErrorBodyActionType = {
  type: typeof GET_ERROR_BODY;
  error;
};

export type ModalErrorActionTypes =
  | OpenErrorModalWindowActionType
  | CloseErrorModalWindowActionType
  | GetErrorBodyActionType;

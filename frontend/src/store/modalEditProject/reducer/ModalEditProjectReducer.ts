import {
  OPEN_EDIT_MODAL_WINDOW,
  CLOSE_EDIT_MODAL_WINDOW,
  EDITING_PROJECT_INFO,
  EditProjectModalState,
  ModalEditProjectActionTypes
} from '../action/ModalEditProjectTypes';

const initialState: EditProjectModalState = {
  opened: false,
  projectId: 0,
  project: {}
};

export const editProjectModalReducer = (
  state = initialState,
  action: ModalEditProjectActionTypes
): EditProjectModalState => {
  switch (action.type) {
    case OPEN_EDIT_MODAL_WINDOW:
      return { ...state, opened: true };
    case CLOSE_EDIT_MODAL_WINDOW:
      return { ...state, opened: false };
    case EDITING_PROJECT_INFO:
      return { ...state, project: action.project };
    default:
      return state;
  }
};

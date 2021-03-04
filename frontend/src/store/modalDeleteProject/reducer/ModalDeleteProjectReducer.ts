import {
  DeleteProjectModalState,
  OPEN_DELETE_MODAL_WINDOW,
  CLOSE_DELETE_MODAL_WINDOW,
  DELETING_PROJECT_INFO,
  ModalDeleteProjectActionTypes
} from '../action/ModalDeleteProjectTypes';

const initialState: DeleteProjectModalState = {
  opened: false,
  projectId: 0,
  project: {}
};

export const deleteProjectModalReducer = (
  state = initialState,
  action: ModalDeleteProjectActionTypes
): DeleteProjectModalState => {
  switch (action.type) {
    case OPEN_DELETE_MODAL_WINDOW:
      return { ...state, opened: true };
    case CLOSE_DELETE_MODAL_WINDOW:
      return { ...state, opened: false };
    case DELETING_PROJECT_INFO:
      return { ...state, project: action.project };
    default:
      return state;
  }
};

import {
  Project,
  OPEN_DELETE_MODAL_WINDOW,
  CLOSE_DELETE_MODAL_WINDOW,
  DELETING_PROJECT_INFO,
  ModalDeleteProjectActionTypes
} from './ModalDeleteProjectTypes';

export const projectDeleteInizialized = (project: Project) => {
  return dispatch => {
    dispatch(getDeletingProjectInfo(project));
    dispatch(openDeleteProjectModalWindow());
  };
};
export const getDeletingProjectInfo = (
  project: Project
): ModalDeleteProjectActionTypes => ({
  type: DELETING_PROJECT_INFO,
  project
});
export const openDeleteProjectModalWindow = (): ModalDeleteProjectActionTypes => ({
  type: OPEN_DELETE_MODAL_WINDOW
});

export const closeDeleteProjectModalWindow = (): ModalDeleteProjectActionTypes => ({
  type: CLOSE_DELETE_MODAL_WINDOW
});

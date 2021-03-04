import { hideEditProjectEmptyValueError } from '../../homePage/action/homeAction';
import {
  OPEN_EDIT_MODAL_WINDOW,
  CLOSE_EDIT_MODAL_WINDOW,
  EDITING_PROJECT_INFO,
  ModalEditProjectActionTypes,
  Project
} from './ModalEditProjectTypes';

export const projectEditInizialized = (project: Project) => {
  return dispatch => {
    dispatch(getEditingProjectInfo(project));
    dispatch(openEditProjectModalWindow());
  };
};
export const getEditingProjectInfo = (
  project: Project
): ModalEditProjectActionTypes => ({
  type: EDITING_PROJECT_INFO,
  project
});
export const openEditProjectModalWindow = (): ModalEditProjectActionTypes => ({
  type: OPEN_EDIT_MODAL_WINDOW
});

export const closeEditProjectModalWindow = (): ModalEditProjectActionTypes => ({
  type: CLOSE_EDIT_MODAL_WINDOW
});

export const onCloseModalEditProject = () => {
  return dispatch => {
    dispatch(hideEditProjectEmptyValueError());
    dispatch(closeEditProjectModalWindow());
  };
};

import { errorInizialized } from './../../modalError/action/ModalErrorAction';
import { ModalDeleteProjectActionTypes } from './../../modalDeleteProject/action/ModalDeleteProjectTypes';
import { ModalEditProjectActionTypes } from './../../modalEditProject/action/ModalEditProjectTypes';
import {
  CHANGE_VALUE_ADD_PROJECT,
  CHANGE_VALUE_EDIT_PROJECT,
  START_LOADING_NEW_PROJECT,
  END_LOADING_NEW_PROJECT,
  CLEAR_VALUE_EDIT_PROJECT,
  CLEAR_VALUE_ADD_PROJECT,
  SHOW_ADD_PROJECT_EMPTY_VALUE_ERROR,
  HIDE_ADD_PROJECT_EMPTY_VALUE_ERROR,
  SHOW_EDIT_PROJECT_EMPTY_VALUE_ERROR,
  HIDE_EDIT_PROJECT_EMPTY_VALUE_ERROR,
  GET_ALL_PROJECTS,
  ProjectActionTypes,
  Project
} from './homeTypes';
import { apiProjectService } from '../../../services/apiProjectService';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '../../rootReducer';
import { IEditProject, INewProject } from '../../../Interface/Interface';
import { closeEditProjectModalWindow } from '../../modalEditProject/action/ModalEditProjectAction';
import { closeDeleteProjectModalWindow } from '../../modalDeleteProject/action/ModalDeleteProjectActions';

export const changeAddValue = (
  addProjectValue: string
): ProjectActionTypes => ({
  type: CHANGE_VALUE_ADD_PROJECT,
  addProjectValue
});

export const changeEditValue = (
  editProjectValue: string
): ProjectActionTypes => ({
  type: CHANGE_VALUE_EDIT_PROJECT,
  editProjectValue
});

export const clearEditValue = (): ProjectActionTypes => ({
  type: CLEAR_VALUE_EDIT_PROJECT
});

export const clearAddValue = (): ProjectActionTypes => ({
  type: CLEAR_VALUE_ADD_PROJECT
});

export const startLoadingProject = (): ProjectActionTypes => ({
  type: START_LOADING_NEW_PROJECT
});

export const endLoadingProject = (): ProjectActionTypes => ({
  type: END_LOADING_NEW_PROJECT
});

export const showAddProjectEmptyValueError = (): ProjectActionTypes => ({
  type: SHOW_ADD_PROJECT_EMPTY_VALUE_ERROR
});

export const hideAddProjectEmptyValueError = (): ProjectActionTypes => ({
  type: HIDE_ADD_PROJECT_EMPTY_VALUE_ERROR
});

export const showEditProjectEmptyValueError = (): ProjectActionTypes => ({
  type: SHOW_EDIT_PROJECT_EMPTY_VALUE_ERROR
});

export const hideEditProjectEmptyValueError = (): ProjectActionTypes => ({
  type: HIDE_EDIT_PROJECT_EMPTY_VALUE_ERROR
});

export const getAllProjects = (projects: Project[]): ProjectActionTypes => ({
  type: GET_ALL_PROJECTS,
  projects
});

export const thunkGetProjects = (): ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ProjectActionTypes
> => {
  return dispatch =>
    apiProjectService
      .getProjects()
      .then(data => {
        dispatch(getAllProjects(data.data));
      })
      .catch(err => dispatch(errorInizialized(err.response.data)));
};

export const thunkDeleteProjects = (
  projectId: number
): ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ProjectActionTypes | ModalDeleteProjectActionTypes
> => {
  return dispatch =>
    apiProjectService
      .deleteProject(projectId)
      .then(() => {
        dispatch(thunkGetProjects());
        dispatch(closeDeleteProjectModalWindow());
      })
      .catch(err => {
        dispatch(closeDeleteProjectModalWindow());
        dispatch(errorInizialized(err.response.data));
      });
};

export const thunkAddProject = (
  newProject: INewProject
): ThunkAction<Promise<void>, AppStateType, unknown, ProjectActionTypes> => {
  return async dispatch => {
    dispatch(clearAddValue());
    await apiProjectService
      .addProject(newProject)
      .then(() => dispatch(thunkGetProjects()))
      .catch(() => dispatch(showAddProjectEmptyValueError()));
  };
};

export const thunkEditProject = (
  projectId: number,
  editProject: IEditProject
): ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ProjectActionTypes | ModalEditProjectActionTypes
> => {
  return dispatch =>
    apiProjectService
      .editProject(projectId, editProject)
      .then(() => {
        dispatch(closeEditProjectModalWindow());
        dispatch(thunkGetProjects());
        dispatch(clearEditValue());
      })
      .catch(() => {
        dispatch(showEditProjectEmptyValueError());
      });
};

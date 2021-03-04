export const CHANGE_VALUE_ADD_PROJECT = 'CHANGE_VALUE_ADD_PROJECT';
export const CHANGE_VALUE_EDIT_PROJECT = 'CHANGE_VALUE_EDIT_PROJECT';
export const CLEAR_VALUE_EDIT_PROJECT = 'CLEAR_VALUE_EDIT_PROJECT';
export const CLEAR_VALUE_ADD_PROJECT = 'CLEAR_VALUE_ADD_PROJECT';
export const CREATE_NEW_PROJECT = 'CREATE_NEW_PROJECT';
export const START_LOADING_NEW_PROJECT = 'START_LOADING_NEW_PROJECT';
export const END_LOADING_NEW_PROJECT = 'END_LOADING_NEW_PROJECT';
export const GET_ALL_PROJECTS = 'GET_ALL_PROJECTS';
export const SHOW_ADD_PROJECT_EMPTY_VALUE_ERROR =
  'SHOW_ADD_PROJECT_EMPTY_VALUE_ERROR';
export const HIDE_ADD_PROJECT_EMPTY_VALUE_ERROR =
  'HIDE_ADD_PROJECT_EMPTY_VALUE_ERROR';
export const SHOW_EDIT_PROJECT_EMPTY_VALUE_ERROR =
  'SHOW_EDIT_PROJECT_EMPTY_VALUE_ERROR';
export const HIDE_EDIT_PROJECT_EMPTY_VALUE_ERROR =
  'HIDE_EDIT_PROJECT_EMPTY_VALUE_ERROR';
export const DELETE_PROJECT = 'DELETE_PROJECT';

export type Project = {
  id: number;
  name: string;
};

export type HomePageState = {
  projects: Project[];
  addProjectValue: string;
  editProjectValue: string;
  addProjectLoader: boolean;
  isAddValueEmpty: boolean;
  isEditValueEmpty: boolean;
};

export type AddProjectFormActionType = {
  type: typeof CHANGE_VALUE_ADD_PROJECT;
  addProjectValue: string;
};

export type EditProjectFormActionType = {
  type: typeof CHANGE_VALUE_EDIT_PROJECT;
  editProjectValue: string;
};

export type ClearEditProjectFormActionType = {
  type: typeof CLEAR_VALUE_EDIT_PROJECT;
};

export type ClearAddProjectFormActionType = {
  type: typeof CLEAR_VALUE_ADD_PROJECT;
};

export type ShowAddProjectEmptyValueErrorActionType = {
  type: typeof SHOW_ADD_PROJECT_EMPTY_VALUE_ERROR;
};

export type HideAddProjectEmptyValueErrorActionType = {
  type: typeof HIDE_ADD_PROJECT_EMPTY_VALUE_ERROR;
};

export type ShowEditProjectEmptyValueErrorActionType = {
  type: typeof SHOW_EDIT_PROJECT_EMPTY_VALUE_ERROR;
};

export type HideEditProjectEmptyValueErrorActionType = {
  type: typeof HIDE_EDIT_PROJECT_EMPTY_VALUE_ERROR;
};

export type GetAllProjectsActionType = {
  type: typeof GET_ALL_PROJECTS;
  projects: Project[];
};

export type CreateNewProjectActionType = {
  type: typeof CREATE_NEW_PROJECT;
  projectName: string;
};

export type StartLoadingProjectActionType = {
  type: typeof START_LOADING_NEW_PROJECT;
};

export type EndLodingNewProjectActionType = {
  type: typeof END_LOADING_NEW_PROJECT;
};

export type ProjectActionTypes =
  | AddProjectFormActionType
  | EditProjectFormActionType
  | ClearEditProjectFormActionType
  | ClearAddProjectFormActionType
  | CreateNewProjectActionType
  | StartLoadingProjectActionType
  | ShowAddProjectEmptyValueErrorActionType
  | HideAddProjectEmptyValueErrorActionType
  | ShowEditProjectEmptyValueErrorActionType
  | HideEditProjectEmptyValueErrorActionType
  | EndLodingNewProjectActionType
  | GetAllProjectsActionType;

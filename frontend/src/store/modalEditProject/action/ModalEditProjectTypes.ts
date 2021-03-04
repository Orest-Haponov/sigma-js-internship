export const OPEN_EDIT_MODAL_WINDOW = 'OPEN_EDIT_MODAL_WINDOW';
export const CLOSE_EDIT_MODAL_WINDOW = 'CLOSE_EDIT_MODAL_WINDOW';
export const PROJECT_EDIT_INITIALIZED = 'PROJECT_EDIT_INITIALIZED';
export const EDITING_PROJECT_INFO = 'EDITING_PROJECT_INFO';

export type Project = {
  projectName: string;
  projectId: number;
};

export type EditProjectModalState = {
  opened: boolean;
  projectId: number;
  project: Project;
};

export type OpenEditModalWindowActionType = {
  type: typeof OPEN_EDIT_MODAL_WINDOW;
};
export type CloseEditModalWindowActionType = {
  type: typeof CLOSE_EDIT_MODAL_WINDOW;
};
export type ProjectEditInitializedActionType = {
  type: typeof PROJECT_EDIT_INITIALIZED;
  project: Project;
};

export type DeletingProjectInfoActionType = {
  type: typeof EDITING_PROJECT_INFO;
  project: Project;
};

export type ModalEditProjectActionTypes =
  | OpenEditModalWindowActionType
  | CloseEditModalWindowActionType
  | ProjectEditInitializedActionType
  | DeletingProjectInfoActionType;

export const OPEN_DELETE_MODAL_WINDOW = 'OPEN_DELETE_MODAL_WINDOW';
export const CLOSE_DELETE_MODAL_WINDOW = 'CLOSE_DELETE_MODAL_WINDOW';
export const PROJECT_DELETE_INITIALIZED = 'PROJECT_DELETE_INITIALIZED';
export const DELETING_PROJECT_INFO = 'DELETING_PROJECT_INFO';

export type Project = {
  projectName: string;
  projectId: number;
};

export type DeleteProjectModalState = {
  opened: boolean;
  projectId: number;
  project: Project;
};

export type OpenDeleteModalWindowActionType = {
  type: typeof OPEN_DELETE_MODAL_WINDOW;
};
export type CloseDeleteModalWindowActionType = {
  type: typeof CLOSE_DELETE_MODAL_WINDOW;
};
export type ProjectDeleteInitializedActionType = {
  type: typeof PROJECT_DELETE_INITIALIZED;
  project: Project;
};

export type DeletingProjectInfoActionType = {
  type: typeof DELETING_PROJECT_INFO;
  project: Project;
};

export type ModalDeleteProjectActionTypes =
  | ProjectDeleteInitializedActionType
  | OpenDeleteModalWindowActionType
  | DeletingProjectInfoActionType
  | CloseDeleteModalWindowActionType;

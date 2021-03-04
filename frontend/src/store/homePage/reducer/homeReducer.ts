import {
  HomePageState,
  CHANGE_VALUE_ADD_PROJECT,
  CHANGE_VALUE_EDIT_PROJECT,
  CLEAR_VALUE_EDIT_PROJECT,
  CLEAR_VALUE_ADD_PROJECT,
  START_LOADING_NEW_PROJECT,
  END_LOADING_NEW_PROJECT,
  SHOW_ADD_PROJECT_EMPTY_VALUE_ERROR,
  HIDE_ADD_PROJECT_EMPTY_VALUE_ERROR,
  SHOW_EDIT_PROJECT_EMPTY_VALUE_ERROR,
  HIDE_EDIT_PROJECT_EMPTY_VALUE_ERROR,
  GET_ALL_PROJECTS,
  ProjectActionTypes
} from '../action/homeTypes';

const initialState: HomePageState = {
  projects: [],
  addProjectValue: '',
  editProjectValue: '',
  addProjectLoader: false,
  isAddValueEmpty: false,
  isEditValueEmpty: false
};

export const homeReducer = (
  state = initialState,
  action: ProjectActionTypes
): HomePageState => {
  switch (action.type) {
    case CHANGE_VALUE_ADD_PROJECT:
      return {
        ...state,
        addProjectValue: action.addProjectValue
      };
    case CHANGE_VALUE_EDIT_PROJECT:
      return {
        ...state,
        editProjectValue: action.editProjectValue
      };
    case CLEAR_VALUE_EDIT_PROJECT:
      return {
        ...state,
        editProjectValue: ''
      };
    case CLEAR_VALUE_ADD_PROJECT:
      return {
        ...state,
        addProjectValue: ''
      };
    case GET_ALL_PROJECTS:
      return {
        ...state,
        projects: action.projects
      };
    case START_LOADING_NEW_PROJECT:
      return {
        ...state,
        addProjectLoader: true
      };
    case SHOW_ADD_PROJECT_EMPTY_VALUE_ERROR:
      return {
        ...state,
        isAddValueEmpty: true
      };
    case HIDE_ADD_PROJECT_EMPTY_VALUE_ERROR:
      return {
        ...state,
        isAddValueEmpty: false
      };
    case SHOW_EDIT_PROJECT_EMPTY_VALUE_ERROR:
      return {
        ...state,
        isEditValueEmpty: true
      };
    case HIDE_EDIT_PROJECT_EMPTY_VALUE_ERROR:
      return {
        ...state,
        isEditValueEmpty: false
      };
    case END_LOADING_NEW_PROJECT:
      return {
        ...state,
        addProjectLoader: false
      };
    default:
      return state;
  }
};

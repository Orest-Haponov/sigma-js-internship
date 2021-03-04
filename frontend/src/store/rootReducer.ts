import { combineReducers } from 'redux';
import { homeReducer } from './homePage/reducer/homeReducer';
import { deleteProjectModalReducer } from './modalDeleteProject/reducer/ModalDeleteProjectReducer';
import { editProjectModalReducer } from './modalEditProject/reducer/ModalEditProjectReducer';
import { errorModalReducer } from './modalError/reducer/ModalErrorReducer';

let rootReducer = combineReducers({
  home: homeReducer,
  deleteProjectModal: deleteProjectModalReducer,
  editProjectModal: editProjectModalReducer,
  errorModal: errorModalReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export default rootReducer;

import React from 'react';
import { Modal } from '@material-ui/core';
import { connect, ConnectedProps } from 'react-redux';
import { AppStateType } from '../../../../../store/rootReducer';
import { onCloseModalEditProject } from '../../../../../store/modalEditProject/action/ModalEditProjectAction';
import ProjectButton from '../../../../shared/projectButton/ProjectButton';
import { IEditProject } from '../../../../../Interface/Interface';
import {
  changeEditValue,
  hideEditProjectEmptyValueError,
  thunkEditProject
} from '../../../../../store/homePage/action/homeAction';
import ProjectInput from '../../../../shared/projectInput/ProjectInput';
import EmptyFormError from '../../../../shared/emptyFormError/EmptyFormError';
import './editProjectModal.scss';

const EditProjectModal: React.FC<Props> = props => {
  return (
    <Modal
      open={props.opened}
      onClose={props.onCloseModalEditProject}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className="edit-project-modal">
        <h1>Please enter new name</h1>
        <ProjectInput
          label={props.project.projectName}
          value={props.editProjectValue}
          valueChange={props.changeEditValue}
          hideError={props.hideEditProjectEmptyValueError}
        />
        {props.isEditValueEmpty && <EmptyFormError />}
        <div className="edit-project-modal-buttons">
          <ProjectButton
            label="Save"
            btnAction={() =>
              props.editProject(props.project.projectId, {
                name: props.editProjectValue
              })
            }
            btnClass="save"
          />
          <ProjectButton
            label="Cancel"
            btnAction={props.onCloseModalEditProject}
            btnClass="cancel"
          />
        </div>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  opened: state.editProjectModal.opened,
  project: state.editProjectModal.project,
  editProjectValue: state.home.editProjectValue,
  isEditValueEmpty: state.home.isEditValueEmpty
});

const mapDispatchToProps = {
  onCloseModalEditProject: () => onCloseModalEditProject(),
  changeEditValue: (editProjectValue: string) =>
    changeEditValue(editProjectValue),
  editProject: (projectId: number, editProject: IEditProject) =>
    thunkEditProject(projectId, editProject),
  hideEditProjectEmptyValueError: () => hideEditProjectEmptyValueError()
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

export default connector(EditProjectModal);

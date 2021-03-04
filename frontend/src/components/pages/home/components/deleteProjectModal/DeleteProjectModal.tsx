import React from 'react';
import ProjectButton from '../../../../shared/projectButton/ProjectButton';
import { connect, ConnectedProps } from 'react-redux';
import { AppStateType } from '../../../../../store/rootReducer';
import { closeDeleteProjectModalWindow } from '../../../../../store/modalDeleteProject/action/ModalDeleteProjectActions';
import { Modal } from '@material-ui/core';
import './deleteProjectModal.scss';
import { thunkDeleteProjects } from '../../../../../store/homePage/action/homeAction';

export const DeleteProjectModal: React.FC<Props> = props => {
  return (
    <Modal
      open={props.open}
      onClose={props.closeDeleteProjectModalWindow}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className="delete-project-modal">
        <h1>Are you sure you want to delete {props.project.projectName}?</h1>
        <div className="delete-project-modal-buttons">
          <ProjectButton
            label="Delete"
            btnAction={() => props.deleteProject(props.project.projectId)}
            btnClass="delete"
          />
          <ProjectButton
            label="Cancel"
            btnAction={props.closeDeleteProjectModalWindow}
            btnClass="cancel"
          />
        </div>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  open: state.deleteProjectModal.opened,
  project: state.deleteProjectModal.project
});

const mapDispatchToProps = {
  closeDeleteProjectModalWindow: () => closeDeleteProjectModalWindow(),
  deleteProject: (projectId: number) => thunkDeleteProjects(projectId)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

export default connector(DeleteProjectModal);

import React from 'react';
import { Modal } from '@material-ui/core';
import { connect, ConnectedProps } from 'react-redux';
import './errorModal.scss';
import { closeErrorModalWindow } from '../../../store/modalError/action/ModalErrorAction';
import ProjectButton from '../projectButton/ProjectButton';
import { AppStateType } from '../../../store/rootReducer';

const ErrorModal: React.FC<Props> = props => {
  return (
    <Modal
      open={props.opened}
      onClose={props.closeErrorModalWindow}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className="error-modal">
        <div className="error-body">
          <h1>{props.error.code}</h1>
          <p>{props.error.message}</p>
        </div>
        <ProjectButton
          label="Close"
          btnAction={props.closeErrorModalWindow}
          btnClass="Close"
        />
      </div>
    </Modal>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  opened: state.errorModal.opened,
  error: state.errorModal.error
});

const mapDispatchToProps = {
  closeErrorModalWindow: () => closeErrorModalWindow()
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

export default connector(ErrorModal);

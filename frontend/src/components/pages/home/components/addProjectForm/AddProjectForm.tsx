import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { AppStateType } from '../../../../../store/rootReducer';
import './addProjectForm.scss';
import {
  changeAddValue,
  hideAddProjectEmptyValueError,
  thunkAddProject
} from '../../../../../store/homePage/action/homeAction';
import ProjectButton from '../../../../shared/projectButton/ProjectButton';
import ProjectInput from '../../../../shared/projectInput/ProjectInput';
import EmptyFormError from '../../../../shared/emptyFormError/EmptyFormError';
import { INewProject } from '../../../../../Interface/Interface';

export const AddProjectForm: React.FC<PropsFromRedux> = props => {
  return (
    <div className="add-project">
      <div className="add-project-form">
        <h1>Add project</h1>
        <ProjectInput
          label="Project name"
          value={props.addProjectValue}
          valueChange={props.changeAddValue}
          hideError={props.hideAddProjectEmptyValueError}
        />
        {props.isAddValueEmpty && <EmptyFormError />}
        <ProjectButton
          label="Add"
          btnAction={() =>
            props.addProject({
              name: props.addProjectValue
            })
          }
          btnClass="primary"
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  addProjectValue: state.home.addProjectValue,
  isAddValueEmpty: state.home.isAddValueEmpty
});

const mapDispatchToProps = {
  changeAddValue: (addProjectValue: string) => changeAddValue(addProjectValue),
  hideAddProjectEmptyValueError: () => hideAddProjectEmptyValueError(),
  addProject: (newProject: INewProject) => thunkAddProject(newProject)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(AddProjectForm);

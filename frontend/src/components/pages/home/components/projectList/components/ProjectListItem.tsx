import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
import { IMainProjectInfo } from '../../../../../../Interface/Interface';
import { connect, ConnectedProps } from 'react-redux';
import { projectDeleteInizialized } from '../../../../../../store/modalDeleteProject/action/ModalDeleteProjectActions';
import { projectEditInizialized } from '../../../../../../store/modalEditProject/action/ModalEditProjectAction';

export const ProjectListItem: React.FC<Props> = props => {
  return (
    <li>
      <Link to={`/project/${props.projectId}`}>{props.projectName}</Link>
      <div className="project-list-icons">
        <EditIcon
          onClick={() =>
            props.projectEditInizialized({
              projectName: props.projectName,
              projectId: props.projectId
            })
          }
        />
        <HighlightOffIcon
          onClick={() =>
            props.projectDeleteInizialized({
              projectName: props.projectName,
              projectId: props.projectId
            })
          }
        />
      </div>
    </li>
  );
};

const mapDispatchToProps = {
  projectDeleteInizialized: (project: IMainProjectInfo) =>
    projectDeleteInizialized(project),
  projectEditInizialized: (project: IMainProjectInfo) =>
    projectEditInizialized(project)
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & IMainProjectInfo;

export default connector(ProjectListItem);

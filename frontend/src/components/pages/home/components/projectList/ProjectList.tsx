import React, { useEffect } from 'react';
import './projectList.scss';
import ProjectListItem from './components/ProjectListItem';
import { connect, ConnectedProps } from 'react-redux';
import { AppStateType } from '../../../../../store/rootReducer';
import { thunkGetProjects } from '../../../../../store/homePage/action/homeAction';
import DeleteProjectModal from '../deleteProjectModal/DeleteProjectModal';
import EditProjectModal from '../editProjectModal/EditProjectModal';

const ProjectList: React.FC<Props> = props => {
  // NEED FOR SPECIFICS OF USING useEffect
  const getProjects = props.getProjects;
  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <>
      <DeleteProjectModal />
      <EditProjectModal />
      {!props.projects.length ? (
        <h1>You haven't any projects yet</h1>
      ) : (
        <ul className="project-list">
          {props.projects.map((project, index) => {
            return (
              <ProjectListItem
                key={index}
                projectId={project.id}
                projectName={project.name}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  projects: state.home.projects
});

const mapDispatchToProps = {
  getProjects: () => thunkGetProjects()
};
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

export default connector(ProjectList);

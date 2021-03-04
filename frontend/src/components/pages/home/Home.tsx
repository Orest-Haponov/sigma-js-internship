import React from 'react';
import AddProjectForm from './components/addProjectForm/AddProjectForm';
import ProjectList from './components/projectList/ProjectList';
import './home.scss';

const Home: React.FC = () => {
  return (
    <div className="home">
      <AddProjectForm />
      <ProjectList />
    </div>
  );
};

export default Home;

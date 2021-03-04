import { projectsService } from './projects.service';
import { ProjectsService } from '../service/projects.service';
import { projectsRepository } from '../repository/projects-repository';

describe('getProjects', () => {
  it('should return Promise.resolve() on succsess get request', () => {
    // GIVEN
    const projects = [
      {
        id: 1,
        name: 'project One'
      },
      {
        id: 2,
        name: 'project Two'
      },
      {
        id: 3,
        name: 'project Three'
      }
    ];
    jest
      .spyOn(projectsRepository, 'getProjects')
      .mockImplementation(() => Promise.resolve(projects));

    const projectsService = new ProjectsService(projectsRepository);
    // WHEN/THEN
    expect(projectsService.getProjects()).resolves.toMatchObject(projects);
  });

  it('should return Promise.reject() on fail get request', () => {
    const error = 'Error';
    jest
      .spyOn(projectsRepository, 'getProjects')
      .mockImplementation(() => Promise.reject(error));

    const projectsService = new ProjectsService(projectsRepository);
    // WHEN/THEN
    expect(projectsService.getProjects()).rejects.toEqual(error);
  });
});

describe('createProject', () => {
  it('should return Promise.resolve() on succsess create reqest', () => {
    //GIVEN
    const project = { id: 1, name: 'Project one' };
    const body = { name: 'Project one' };
    jest
      .spyOn(projectsRepository, 'createProject')
      .mockImplementation(() => Promise.resolve(project));
    const projectsService = new ProjectsService(projectsRepository);
    //WHEN/THEN
    expect(projectsService.createProject(body)).resolves.toMatchObject(project);
  });

  it('should return Promise.reject() on fail create reqest', () => {
    //GIVEN
    const body = { name: 'Project one' };
    const error = 'error';
    jest
      .spyOn(projectsRepository, 'createProject')
      .mockImplementation(() => Promise.reject(error));
    const projectsService = new ProjectsService(projectsRepository);
    //WHEN/THEN
    expect(projectsService.createProject(body)).rejects.toEqual(error);
  });
});

describe('editProject', () => {
  it('should return Promise.resolve() on succsess edit request', () => {
    //GIVEN
    const id = 1;
    const project = {
      id: 1,
      name: 'New name'
    };
    const body = {
      name: 'New name'
    };
    jest
      .spyOn(projectsRepository, 'editProject')
      .mockImplementation(() => Promise.resolve(project));

    const projectsService = new ProjectsService(projectsRepository);
    //WHEN/THEN
    expect(projectsService.editProject(body, id)).resolves.toMatchObject(
      project
    );
  });

  it('should return Promise.reject() on fail edit request', () => {
    //GIVEN
    const id = 1;
    const body = {
      name: 'New Name'
    };
    const error = 'Error';

    jest
      .spyOn(projectsRepository, 'editProject')
      .mockImplementation(() => Promise.reject(error));
    const projectsService = new ProjectsService(projectsRepository);
    //WHEN/THEN
    expect(projectsService.editProject(body, id)).rejects.toEqual(error);
  });
});

describe('deleteProject', () => {
  it('should return Promise.resolve() on succsess delete request', () => {
    //GIVEN
    const id = 1;
    const response = null;
    jest
      .spyOn(projectsRepository, 'deleteProject')
      .mockImplementation(() => Promise.resolve(response));

    const projectsService = new ProjectsService(projectsRepository);
    //WHEN/THEN
    expect(projectsService.deleteProject(id)).resolves.toEqual(response);
  });

  it('should return Promise.reject() on fail delete request', () => {
    //GIVEN
    const id = 1;
    const error = 'Error';

    jest
      .spyOn(projectsRepository, 'deleteProject')
      .mockImplementation(() => Promise.reject(error));
    const projectsService = new ProjectsService(projectsRepository);
    //WHEN/THEN
    expect(projectsService.deleteProject(id)).rejects.toEqual(error);
  });
});

describe('Transform object', () => {
  it('should return transformed object', () => {
    //GIVEN
    const project = {
      id: 1,
      name: 'Project'
    };
    const tranformedObject = {
      id: 1,
      name: 'Project',
      nameLength: 7
    };
    jest
      .spyOn(projectsService, 'transformationToDTOObject')
      .mockImplementation(() => tranformedObject);

    //WHEN THEN
    expect(projectsService.transformationToDTOObject(project)).toBe(
      tranformedObject
    );
  });
});

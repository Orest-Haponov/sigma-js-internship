import { apiService } from './apiService';
import { ApiProjectService } from './apiProjectService';

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

describe('getProjects', () => {
  it('should return array of projects if user id is correct', () => {
    // GIVEN
    jest
      .spyOn(apiService, 'getRequest')
      .mockImplementation(() => Promise.resolve(projects));
    const apiProjectService = new ApiProjectService(apiService);
    // WHEN/THEN
    expect(apiProjectService.getProjects()).resolves.toMatchObject(projects);
  });

  it('should return Promise.reject() if user id is wrong', () => {
    // GIVEN
    const error = 'Error';
    jest
      .spyOn(apiService, 'getRequest')
      .mockImplementation(() => Promise.reject(error));
    const apiProjectService = new ApiProjectService(apiService);
    // WHEN/THEN
    expect(apiProjectService.getProjects()).rejects.toEqual(error);
  });
});

describe('addProject', () => {
  it('should add new project to array of user projects and return updated projects array if newProject filled correct', () => {
    // GIVEN
    const newProject = {
      name: 'Project'
    };
    jest
      .spyOn(apiService, 'postRequest')
      .mockImplementation(() => Promise.resolve(projects));
    const apiProjectService = new ApiProjectService(apiService);
    // WHEN/THEN
    expect(apiProjectService.addProject(newProject)).resolves.toEqual(projects);
  });

  it('should return Promise.reject() if newProject filled uncorrect', () => {
    // GIVEN
    const body = {
      name: 'Project'
    };
    const error = 'Error';
    jest
      .spyOn(apiService, 'postRequest')
      .mockImplementation(() => Promise.reject(error));
    const apiProjectService = new ApiProjectService(apiService);
    // WHEN/THEN
    expect(apiProjectService.addProject(body)).rejects.toEqual(error);
  });
});

describe('editProject', () => {
  it('should edit project and return updated projects array if editProject is filled correct', () => {
    // GIVEN
    const id = 1;
    const body = {
      name: 'New name'
    };
    jest
      .spyOn(apiService, 'patchRequest')
      .mockImplementation(() => Promise.resolve(projects));
    const apiProjectService = new ApiProjectService(apiService);
    // WHEN/THEN
    expect(apiProjectService.editProject(id, body)).resolves.toEqual(projects);
  });

  it('should return Promise.reject() if editProject is filled uncorrect', () => {
    // GIVEN
    const id = 1;
    const body = {
      name: 'New name'
    };
    const error = 'Error';
    jest
      .spyOn(apiService, 'patchRequest')
      .mockImplementation(() => Promise.reject(error));
    const apiProjectService = new ApiProjectService(apiService);
    // WHEN/THEN
    expect(apiProjectService.editProject(id, body)).rejects.toEqual(error);
  });
});

describe('deleteProject', () => {
  it('should delete project and return array of updated projects if projectId is correct', () => {
    // GIVEN
    const id = 1;
    const response = '';
    jest
      .spyOn(apiService, 'deleteRequest')
      .mockImplementation(() => Promise.resolve(response));
    const apiProjectService = new ApiProjectService(apiService);
    // WHEN/THEN
    expect(apiProjectService.deleteProject(id)).resolves.toEqual(response);
  });

  it('should return Promise.reject() if project id is wrong', () => {
    // GIVEN
    const id = 1;
    const error = 'Error';
    jest
      .spyOn(apiService, 'deleteRequest')
      .mockImplementation(() => Promise.reject(error));
    const apiProjectService = new ApiProjectService(apiService);
    // WHEN/THEN
    expect(apiProjectService.deleteProject(id)).rejects.toEqual(error);
  });
});

import {
  IApiService,
  IEditProject,
  INewProject,
  IProject
} from '../interface/Interface';

let projects = [
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

export class ApiServiceMock implements IApiService {
  getRequest = (url: string): Promise<IProject[]> => {
    return Promise.resolve(projects);
  };
  deleteRequest = (url: string) => {
    return Promise.resolve(projects);
  };
  postRequest = (url: string, body: INewProject) => {
    return Promise.resolve(projects);
  };
  patchRequest = (url: string, body: IEditProject) => {
    return Promise.resolve(projects);
  };
  putRequest = (url: string): Promise<any> => {
    return Promise.resolve(url);
  };
}

export const apiServiceMock = new ApiServiceMock();

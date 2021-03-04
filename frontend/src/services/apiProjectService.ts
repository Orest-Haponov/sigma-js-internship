import {
  dataType,
  IEditProject,
  INewProject,
  IApiService
} from '../interface/Interface';
import { apiService } from './apiService';

export class ApiProjectService {
  constructor(private apiService: IApiService) {}
  getProjects = () => this.apiService.getRequest(`${dataType.projects}`);
  deleteProject = (projectId: number) =>
    this.apiService.deleteRequest(`${dataType.projects}/${projectId}`);
  addProject = (body: INewProject) =>
    this.apiService.postRequest(`${dataType.projects}`, body);
  editProject = (id: number, body: IEditProject) =>
    this.apiService.patchRequest(`${dataType.projects}/${id}`, body);
}

export const apiProjectService = new ApiProjectService(apiService);

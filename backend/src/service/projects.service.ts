import { IProject } from '../interfaces/interfaces';
import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { CreateProjectsDto } from '../DTO/projects/create-projects.dto';
import { EditProjectsDto } from '../DTO/projects/edit-projects.dto';
import { ProjectsModelDto } from '../DTO/projects/projects-model.dto';
import {
  projectsRepository,
  ProjectsRepository
} from '../repository/projects-repository';

@Injectable()
export class ProjectsService {
  constructor(private projectsRepo: ProjectsRepository) {}

  getProjects = async (): Promise<ProjectsModelDto[]> => {
    const projects = await this.projectsRepo.getProjects();
    const tranformedProjects = this.transformationArrayToDTOObject(projects);
    return tranformedProjects;
  };

  async createProject(body: CreateProjectsDto): Promise<ProjectsModelDto> {
    if (body.name.length === 0) {
      throw new BadRequestException();
    } else {
      const project = await this.projectsRepo.createProject(body);
      return this.transformationToDTOObject(project);
    }
  }

  async editProject(
    body: EditProjectsDto,
    id: number
  ): Promise<ProjectsModelDto> {
    const isExist = await this.verifyProject(id);
    if (body.name.length === 0) {
      throw new BadRequestException();
    } else if (!isExist) {
      throw new NotFoundException('Project not found');
    } else {
      const project = await this.projectsRepo.editProject(body, id);
      return this.transformationToDTOObject(project);
    }
  }

  async deleteProject(id: number): Promise<void> {
    const isExist = await this.verifyProject(id);
    if (!isExist) {
      throw new NotFoundException('Project not found');
    } else {
      await this.projectsRepo.deleteProject(id);
    }
  }

  async verifyProject(id: number): Promise<boolean> {
    const project = await this.projectsRepo.getProjectById(id);
    if (project === undefined) {
      return false;
    } else {
      return true;
    }
  }

  transformationToDTOObject = (project: IProject): ProjectsModelDto => {
    const transformedProject = {
      id: project.id,
      name: project.name,
      nameLength: project.name.length
    };
    return transformedProject;
  };

  transformationArrayToDTOObject = (
    projects: ProjectsModelDto[]
  ): ProjectsModelDto[] => {
    projects.map(item => {
      item.nameLength = item.name.length;
    });
    return projects;
  };
}

export const projectsService = new ProjectsService(projectsRepository);

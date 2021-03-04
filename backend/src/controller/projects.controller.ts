import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post
} from '@nestjs/common';
import { ProjectsService } from 'src/service/projects.service';
import { CreateProjectsDto } from 'src/DTO/projects/create-projects.dto';
import { ProjectsModelDto } from 'src/DTO/projects/projects-model.dto';
import { EditProjectsDto } from 'src/DTO/projects/edit-projects.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}
  @Get()
  getProjects(): Promise<ProjectsModelDto[]> {
    return this.projectsService.getProjects();
  }

  @Post()
  createProject(@Body() body: CreateProjectsDto): Promise<ProjectsModelDto> {
    return this.projectsService.createProject(body);
  }

  @Patch(':id')
  editProject(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: EditProjectsDto
  ): Promise<ProjectsModelDto> {
    return this.projectsService.editProject(body, id);
  }

  @Delete(':id')
  deleteProject(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.projectsService.deleteProject(id);
  }
}

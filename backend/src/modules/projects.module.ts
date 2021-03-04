import { ProjectsController } from '../controller/projects.controller';
import { ProjectsRepository } from '../repository/projects-repository';
import { ProjectsService } from '../service/projects.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [ProjectsService, ProjectsRepository],
  controllers: [ProjectsController]
})
export class ProjectModule {}

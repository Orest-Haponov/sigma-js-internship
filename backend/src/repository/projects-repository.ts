import { InjectKnex, Knex } from 'nestjs-knex';
import { CreateProjectsDto } from 'src/DTO/projects/create-projects.dto';
import { EditProjectsDto } from 'src/DTO/projects/edit-projects.dto';
import { IProject } from 'src/interfaces/interfaces';

export class ProjectsRepository {
  @InjectKnex() knex: Knex;

  getProjects = async (): Promise<IProject[]> => {
    // REALIZATION IN POSTGRESQL
    const projects = await this.knex.raw('SELECT * FROM projects');
    return projects.rows;

    // REALIZATION IN KNEX
    // return this.knex.table<IProject>('projects').returning('projects');
  };

  createProject = async (body: CreateProjectsDto): Promise<IProject> => {
    // REALIZATION IN POSTGRESQL
    const newProject = await this.knex.raw(
      `INSERT INTO projects (name) VALUES ('${body.name}') RETURNING *`
    );
    return newProject.rows[0];

    // REALIZATION IN KNEX
    // const newProject = await this.knex
    //   .table<IProject>('projects')
    //   .insert({ name: body.name })
    //   .returning('*');
    // return  newProject[0];
  };

  async editProject(body: EditProjectsDto, id: number): Promise<IProject> {
    // REALIZATION IN POSTGRESQL
    const updatedProject = await this.knex.raw(
      `UPDATE projects SET name='${body.name}' WHERE id=${id} RETURNING *`
    );
    return updatedProject.rows[0];

    // REALIZATION IN KNEX
    // const updatedProject = await this.knex
    //   .table<IProject>('projects')
    //   .where({ id: id })
    //   .update({ name: body.name })
    //   .returning('*');
    // return updatedProject[0];
  }

  deleteProject = (id: number): Promise<void> =>
    // REALIZATION IN POSTGRESQL
    this.knex.raw(`DELETE FROM projects WHERE id=${id}`);

  // REALIZATION IN KNEX
  // this.knex.table<IProject>('projects').where({ id: id }).del();

  getProjectById = async (id: number): Promise<IProject> => {
    const project = await this.knex
      .table<IProject>('projects')
      .where({ id: id })
      .returning('*');
    return project[0];
  };
}

export const projectsRepository = new ProjectsRepository();

import { ErrorHandler } from './shared/error-handler';
import { Module } from '@nestjs/common';
import { ProjectModule } from './modules/projects.module';
import { APP_FILTER } from '@nestjs/core';
import { KnexModule } from 'nestjs-knex';
import 'dotenv/config';

console.log(process.env.DB_USERNAME);
@Module({
  imports: [
    ProjectModule,
    KnexModule.forRoot({
      config: {
        client: 'pg',
        connection: {
          host: 'localhost',
          port: 5433,
          user: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE
        }
      }
    })
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ErrorHandler
    }
  ]
})
export class AppModule {}

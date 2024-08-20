import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import {Task} from "./task.model";
import {TaskService} from "./task.service";

@Module({
  imports: [SequelizeModule.forFeature([Task])],
  providers: [TaskService],
  controllers: [TaskService],
  exports: [TaskService],
})
export class TodoModule {}
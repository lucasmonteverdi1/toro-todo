import { Module } from '@nestjs/common';
import { User } from "./models/user/user.model";
import { Task } from "./models/task/task.model";
import {UserModule} from "./models/user/user.module";
import {TaskModule} from "./models/task/task.module";
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {TaskController} from "./models/task/task.controller";
import {UserController} from "./models/user/user.controller";
import {TaskService} from "./models/task/task.service";
import {UserService} from "./models/user/user.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'postgres', // This should match the service name in docker-compose
      port: 5432,
      username: 'postgres',
      password: 'password', // Make sure this matches the environment setting
      database: 'postgres',
      models: [User, Task],
      autoLoadModels: true,
      synchronize: true,
    }),
    UserModule,
    TaskModule,
  ],
  controllers: [TaskController, UserController],
  providers: [TaskService, UserService],
})
export class AppModule {}

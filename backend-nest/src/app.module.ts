import { Module } from '@nestjs/common';
import { User } from "./models/user/user.model";
import { Task } from "./models/task/task.model";
import {UserModule} from "./models/user/user.module";
import {TaskModule} from "./models/task/task.module";
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'postgres',
      models: [User, Task],
      autoLoadModels: true,
      synchronize: true,
    }),
    UserModule,
    TaskModule,
  ],
  controllers: [],
})
export class AppModule {}

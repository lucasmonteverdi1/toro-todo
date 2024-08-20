import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {User} from "./models/user/user.model";
import {Task} from "./models/task/task.model";
import {UserModule} from "./models/user/user.module";
import {TaskModule} from "./models/task/task.module";

@Module({
  imports: [
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
    TaskModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from "./user.model";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private readonly userModel: typeof User) { }

  async createTask(task: CreateUserDto): Promise<User> {
    return this.userModel.create(task)
  }
}

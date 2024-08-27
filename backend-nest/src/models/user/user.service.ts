import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from "./user.model";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService {

  /* NOTE: userModel can be used as a REPOSITORY. */
  constructor(@InjectModel(User) private readonly userModel: typeof User) { }

  async createUser(task: CreateUserDto): Promise<User> {
    return this.userModel.create(task)
  }

  async getUserById(id: number): Promise< User | null > {
    return this.userModel.findByPk(id);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ where: { email } });
  }
}

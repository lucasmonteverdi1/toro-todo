import {Controller, Get, Param} from '@nestjs/common';
import {UserService} from "./user.service";
import {User} from "./user.model";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get(':id')
  async getUserById(@Param('id') id: number) : Promise<User> {
    const user = await this.userService.getUserById(id);
    return user ? user : null;
  }

}

import {Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post} from '@nestjs/common';
import {User} from "../user/user.model";
import {AuthService} from "./auth.service";
import {RegisterDto} from "./dto/register.dto";
import {LoginDto} from "./dto/login.dto";

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register(@Body() createUserDto: RegisterDto): Promise<User> {
    try {
      return await this.authService.register(createUserDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('/login')
  signIn(@Body() loginDto: LoginDto) {
    const email = loginDto.email;
    const password = loginDto.password;
    return this.authService.signIn(email, password);
  }
}

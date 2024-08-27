import {IsString, IsEmail, IsNotEmpty, Length} from 'class-validator';

export class LoginDto {

  @IsEmail({}, { message: 'Enter a valid email address' })
  @IsNotEmpty({ message: 'Email should not be empty' })
  email: string;

  @IsNotEmpty({ message: 'Field PASSWORD must be completed' })
  @IsString({ message: 'Insert a valid password' })
  password: string;
}
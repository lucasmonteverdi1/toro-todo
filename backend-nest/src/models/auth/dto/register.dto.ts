import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty({ message: 'Field NAME must be completed' })
  @IsString({ message: 'Field NAME must be a word' })
  name: string;

  @IsNotEmpty({ message: 'Field LAST NAME must be completed' })
  @IsString({ message: 'Field LAST NAME must be a word' })
  lastName: string;

  @IsEmail({}, { message: 'Enter a valid email address' })
  @IsNotEmpty({ message: 'Email should not be empty' })
  email: string;

  @IsNotEmpty({ message: 'Field PASSWORD must be completed' })
  @IsString({ message: 'Insert a valid password' })
  @Length(5, undefined, { message: 'Password must be at least 5 characters long' })
  password: string;
}
import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter a valid email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  readonly password: string;
}

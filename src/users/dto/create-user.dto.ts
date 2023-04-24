import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2, { message: 'First name must be at least 2 characters long' })
  readonly firstName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2, { message: 'Surname must be at least 2 characters long' })
  readonly surname: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter a valid email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  readonly password: string;
}

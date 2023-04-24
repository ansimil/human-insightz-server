import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from 'src/users/dto/login-user.dto';

@Controller('signup')
export class SignupController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return await this.usersService.createUser(createUserDto);
  }
}

@Controller('login')
export class LoginController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() loginUserDto: LoginUserDto) {
    console.log(loginUserDto);
    return await this.usersService.loginUser(loginUserDto);
  }
}

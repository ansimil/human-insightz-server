import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Headers,
  Req,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { JwtStrategy } from './jwt.strategy';
import { AuthGuard } from '@nestjs/passport';

@Controller('signup')
export class SignupController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    console.log('create user', createUserDto);
    return await this.usersService.createUser(createUserDto);
  }
}

@Controller('login')
export class LoginController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async login(@Body() loginUserDto: LoginUserDto) {
    return await this.usersService.loginUser(loginUserDto);
  }
}

@Controller('authenticate')
export class AuthController {
  constructor(private readonly jwtStrategy: JwtStrategy) {}

  @UseGuards(AuthGuard())
  @Get()
  authenticate(@Req() request) {
    const user = {
      id: request.user._id,
      firstName: request.user.firstName,
      surname: request.user.surname,
    };
    return user;
  }
}

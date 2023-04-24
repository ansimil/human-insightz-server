import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';
import { LoginUserDto } from '../users/dto/login-user.dto';

@Injectable()
export class LoginService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  loginUser(user: LoginUserDto) {
    return user;
  }
}

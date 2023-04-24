import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

@Injectable()
export class SignupService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  createUser(user) {
    console.log(user);
    return user;
  }
}

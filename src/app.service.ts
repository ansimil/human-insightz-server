import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  helloDudes() {
    return 'Coolio dudes!';
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  registerUser(): string {
    return 'User registered successfully!';
  }
}

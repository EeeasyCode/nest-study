import { Controller, Post } from '@nestjs/common';

@Controller('Users')
export class UsersController {
  @Post('hello')
  async hello() {
    return 'hello';
  }
}

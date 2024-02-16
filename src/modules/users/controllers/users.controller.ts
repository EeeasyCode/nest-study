import { Controller, Post } from '@nestjs/common';

@Controller('Users')
export class UsersController {
  @Post('/join')
  async joinUser() {
    return 'success';
  }
}

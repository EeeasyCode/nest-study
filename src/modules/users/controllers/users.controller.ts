import { Controller, Post } from '@nestjs/common';

@Controller('Users')
export class UsersController {
  @Post('hello')
  async hello() {
    const conventionTest = {
      name: '홍길동',
      from: '활빈당',
    };
    return 'hello';
  }
}

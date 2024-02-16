import { Body, Controller, Get, Post } from '@nestjs/common';
import { JoinUserDto } from '../dtos/join-user.dto';

@Controller('users')
export class UsersController {
  @Get()
  getHello() {
    return 'hello';
  }

  @Post('/join')
  async joinUser(@Body() joinUserDto: JoinUserDto) {
    const { userEmail, password } = joinUserDto;

    return userEmail;
  }
}

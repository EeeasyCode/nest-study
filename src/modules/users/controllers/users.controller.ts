import { Body, Controller, Post } from '@nestjs/common';
import { JoinUserDto } from '../dtos/join-user.dto';

@Controller('Users')
export class UsersController {
  @Post('/join')
  async joinUser(@Body() joinUserDto: JoinUserDto) {
    const { userEmail } = joinUserDto;
    return userEmail;
  }
}

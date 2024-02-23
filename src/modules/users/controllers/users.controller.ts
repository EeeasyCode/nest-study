import { Body, Controller, Get, Post } from '@nestjs/common';
import { JoinUserDto } from '../dtos/join-user.dto';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/join')
  async joinUser(@Body() joinUserDto: JoinUserDto) {
    const joinUserState = await this.usersService.joinUser(joinUserDto);
    console.log('asdfsadf');
    if (joinUserState === 'success') {
      return 'success join user';
    }

    return 'already exist user';
  }
}

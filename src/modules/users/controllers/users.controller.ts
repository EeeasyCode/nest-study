import { Body, Controller, Get, Post } from '@nestjs/common';
import { JoinUserDto } from '../dtos/join-user.dto';
import { UsersService } from '../services/users.service';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { Users } from '../entities/users.entity';

@Controller('users')
@ApiCreatedResponse({ type: Users })
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/join')
  async joinUser(@Body() joinUserDto: JoinUserDto) {
    const joinUserState = await this.usersService.joinUser(joinUserDto);

    if (joinUserState === 'success') {
      return 'success join user';
    }

    return 'already exist user';
  }
}

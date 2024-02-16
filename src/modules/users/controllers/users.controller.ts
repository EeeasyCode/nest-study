import { Body, Controller, Get, Post } from '@nestjs/common';
import { JoinUserDto } from '../dtos/join-user.dto';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getHello() {
    return 'hello';
  }

  @Post('/join')
  async joinUser(@Body() joinUserDto: JoinUserDto) {
    const { userEmail, password } = joinUserDto;

    await this.usersService.joinUser(joinUserDto);

    return userEmail;
  }
}

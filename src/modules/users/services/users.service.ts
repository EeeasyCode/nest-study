import { Injectable } from '@nestjs/common';
import { JoinUserDto } from '../dtos/join-user.dto';
import { UsersRepository } from '../repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async joinUser(joinUserDto: JoinUserDto): Promise<string> {
    const existUser = await this.usersRepository.existCheckUser(joinUserDto.userEmail);

    if (!existUser) {
      await this.usersRepository.joinUser(joinUserDto);
      return 'success';
    }

    return 'fail';
  }
}

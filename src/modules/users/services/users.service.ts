import { Injectable } from '@nestjs/common';
import { JoinUserDto } from '../dtos/join-user.dto';

import { UserDetailRepository } from '../repositories/users.detail.repository';
import { UserRepository } from '../repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userDetailRepository: UserDetailRepository
  ) {}

  async joinUser(joinUserDto: JoinUserDto): Promise<string> {
    const existUser = await this.userRepository.existCheckUser(joinUserDto.userEmail);

    if (!existUser) {
      await this.userRepository.joinUser(joinUserDto);
      return 'success';
    }

    return 'fail';
  }

  async findDetail() {
    const userList = await this.userRepository.testFind();
    console.log(userList);
  }
}

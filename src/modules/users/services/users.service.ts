import { Injectable } from '@nestjs/common';
import { JoinUserDto } from '../dtos/join-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../entities/users.entity';
import { Repository } from 'typeorm';
import { UsersRepository } from '../repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async joinUser(joinUserDto: JoinUserDto) {
    const test = await this.usersRepository.joinUser(joinUserDto);
  }
}

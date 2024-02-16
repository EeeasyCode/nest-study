import { Injectable } from '@nestjs/common';
import { JoinUserDto } from '../dtos/join-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>
  ) {}
  async joinUser(joinUserDto: JoinUserDto) {}
}

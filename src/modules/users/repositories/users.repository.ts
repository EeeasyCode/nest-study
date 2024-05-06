import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Users } from '../entities/users.entity';
import { JoinUserDto } from '../dtos/join-user.dto';
import { CustomRepository } from '@/core/decorators/custom.repository.decorator';

@CustomRepository(Users)
export class UsersRepository extends Repository<Users> {
  async existCheckUser(userEmail: string): Promise<Users> {
    const checkUser: Users = await this.findOne({
      where: {
        userEmail
      }
    });
    console.log(checkUser);
    return checkUser;
  }

  async joinUser(joinUserDto: JoinUserDto): Promise<void> {
    try {
      const joinUser: Users = this.create(joinUserDto);
      await this.save(joinUser);
    } catch (err) {
      console.log(err);
    }
  }

  async findAllUser() {
    return await this.find();
  }
}

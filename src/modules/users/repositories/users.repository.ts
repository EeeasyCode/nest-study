import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Users } from '../entities/users.entity';
import { JoinUserDto } from '../dtos/join-user.dto';

@Injectable()
export class UsersRepository {
  private usersRepository: Repository<Users>;
  constructor(private readonly dataSource: DataSource) {
    this.usersRepository = this.dataSource.getRepository(Users);
  }
  async existCheckUser(userEmail: string): Promise<Users> {
    const checkUser: Users = await this.usersRepository.findOne({
      where: {
        userEmail
      }
    });
    console.log(checkUser);
    return checkUser;
  }

  async joinUser(joinUserDto: JoinUserDto): Promise<void> {
    try {
      const joinUser: Users = this.usersRepository.create(joinUserDto);
      await this.usersRepository.save(joinUser);
    } catch (err) {
      console.log(err);
    }
  }
}

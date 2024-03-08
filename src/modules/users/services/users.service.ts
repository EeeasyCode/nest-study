import { Injectable } from '@nestjs/common';
import { JoinUserDto } from '../dtos/join-user.dto';
import { UsersRepository } from '../repositories/users.repository';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    @InjectDataSource('default') private readonly dataSource: DataSource
  ) {}

  async joinUser(joinUserDto: JoinUserDto): Promise<string> {
    const connection = this.dataSource.createQueryRunner();

    await connection.connect();
    await connection.startTransaction();

    try {
      await this.usersRepository.existCheckUser(joinUserDto.userEmail);
      // await this.usersRepository.joinUser(joinUserDto);
      await connection.manager.withRepository(this.usersRepository).joinUser(joinUserDto);
      throw Error('error');

      await connection.commitTransaction();
    } catch (e) {
      console.log('Error:', e);
      await connection.rollbackTransaction();
    } finally {
      await connection.release();
    }

    return 'fail';
  }
}

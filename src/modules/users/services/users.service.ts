import { Injectable } from '@nestjs/common';
import { JoinUserDto } from '../dtos/join-user.dto';
import { UsersRepository } from '../repositories/users.repository';
import { Payments } from '@/modules/payments/payments.entity';
import { plainToClass } from 'class-transformer';
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

  async findAllUser() {
    return await this.usersRepository.findAllUser();
  }

  async leftJoin() {
    const userData = await this.usersRepository.find();
    const userIds = userData.map((user) => user.id);
    return await this.usersRepository
      .createQueryBuilder('user')
      .leftJoinAndMapMany('user.payment', Payments, 'payment', 'user.id = payment.userId')
      .getMany();

    // return await this.usersRepository
    //   .createQueryBuilder('user')
    //   .leftJoinAndMapOne('user.payment', Payments, 'payment', 'user.id = payment.userId')
    //   .getRawMany();
    // .createQueryBuilder('user')
    // .leftJoin(Payments, 'payment', 'payment.userId = user.id')
    // .getRawMany();

    // .createQueryBuilder('user')
    // .innerJoin(Payments, 'payment', 'payment.userId = user.id')
    // .leftJoin(Payments, 'payment', 'payment.userId = user.id')
    // .addSelect(['payment.id', 'payment.userId'])
    // .getMany();
  }

  async eagerLoading() {
    const users = await this.usersRepository.findOne({ where: { id: 1 } });
    return users;
  }
}

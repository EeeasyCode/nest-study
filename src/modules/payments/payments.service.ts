import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Payments } from './payments.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from '../users/services/users.service';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payments)
    private readonly paymentsRepository: Repository<Payments>,
    private readonly userService: UsersService
  ) {}

  async test() {
    const userData = await this.userService.findAllUser();
    userData.forEach(async (user) => {
      console.log(user.id);
      const paymentData = await this.paymentsRepository.findBy({ userId: user.id });
      console.log('paymentData: ', paymentData);
    });
    return userData;
  }

  async test2() {
    // const userData = await this.userService.findAllUser();
    // const userIds = userData.map((user) => user.id);
    // const paymentData = await this.paymentsRepository
    //   .createQueryBuilder('payments')
    //   .where('payments.userId IN (:...userIds)', { userIds })
    //   .getMany();
    return await this.userService.leftJoin();
  }

  async test3() {
    const entity = this.paymentsRepository.create({
      id: 1,
      userId: 1,
      updated_at: Date()
    });
    // duplicate error 발생
    // await this.paymentsRepository.insert(entity);

    // 이미 존재하기 때문에, select 후 update query
    await this.paymentsRepository.save(entity);
    console.log(entity);
  }
}

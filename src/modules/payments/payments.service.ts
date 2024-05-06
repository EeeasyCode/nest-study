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
}

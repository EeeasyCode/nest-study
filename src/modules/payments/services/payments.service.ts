import { Injectable } from '@nestjs/common';
import { OrderProductDto } from '../dtos/orders-product.dto';
import { PaymentsRepository } from '../repositories/payments.repository';
import { DataSource } from 'typeorm';
import { UsersInventoryRepository } from '@/modules/users/repositories/users-inventory.repository';

@Injectable()
export class PaymentsService {
  constructor(
    private readonly paymentsRepository: PaymentsRepository,
    private readonly usersInventoryRepository: UsersInventoryRepository,
    private dataSource: DataSource
  ) {}

  async paymentTransaction(orderProductDto: OrderProductDto) {
    const { paymentType, paymentProduct, paymentAmount, user_id, passTicket, matchTicket, point } = orderProductDto;
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager
        .withRepository(this.paymentsRepository)
        .paymentProcessing(user_id, paymentType, paymentProduct, paymentAmount);
      throw new Error();
      await queryRunner.manager.withRepository(this.usersInventoryRepository).updateInventory(user_id, passTicket, matchTicket, point);

      await queryRunner.commitTransaction();
    } catch (e) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}

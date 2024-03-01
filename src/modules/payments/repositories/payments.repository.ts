import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CustomRepository } from '@/core/decorators/custom.repository.decorator';
import { Payments } from '../entities/payments.entity';
import { OrderProductDto } from '../dtos/orders-product.dto';

@CustomRepository(Payments)
export class PaymentsRepository extends Repository<Payments> {
  async paymentProcessing(orderProductDto: OrderProductDto) {
    return await this.save({
      payment_type: '신용카드 결제',
      payment_product: '패스권',
      payment_amount: '1'
    });
  }
}

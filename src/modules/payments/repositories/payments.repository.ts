import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CustomRepository } from '@/core/decorators/custom.repository.decorator';
import { Payments } from '../entities/payments.entity';
import { OrderProductDto } from '../dtos/orders-product.dto';

@CustomRepository(Payments)
export class PaymentsRepository extends Repository<Payments> {
  async paymentProcessing(orderProductDto: OrderProductDto) {}
}

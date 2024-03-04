import { Repository } from 'typeorm';
import { CustomRepository } from '@/core/decorators/custom.repository.decorator';
import { Payments } from '../entities/payments.entity';

@CustomRepository(Payments)
export class PaymentsRepository extends Repository<Payments> {
  async paymentProcessing(user_id: number, paymentType: string, paymentProduct: string, paymentAmount: string) {
    return await this.save({
      user: user_id,
      payment_type: paymentType,
      payment_product: paymentProduct,
      payment_amount: paymentAmount
    });
  }
}

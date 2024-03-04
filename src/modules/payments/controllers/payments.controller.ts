import { Body, Controller, Post } from '@nestjs/common';
import { OrderProductDto } from '../dtos/orders-product.dto';
import { PaymentsService } from '../services/payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('orders')
  async ordersProduct(@Body() orderProductDto: OrderProductDto) {
    await this.paymentsService.paymentTransaction(orderProductDto);
  }
}

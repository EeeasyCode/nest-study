import { Controller, Get } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentService: PaymentsService) {}

  @Get()
  async test() {
    return await this.paymentService.test();
  }

  @Get('test2')
  async test2() {
    return await this.paymentService.test2();
  }

  @Get('test3')
  async test3() {
    return await this.paymentService.test3();
  }
}

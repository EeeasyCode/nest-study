import { Module } from '@nestjs/common';
import { CustomRepositoryModule } from '@/core/decorators/custom.repository.module';
import { PaymentsController } from './controllers/payments.controller';
import { PaymentsService } from './services/payments.service';
import { PaymentsRepository } from './repositories/payments.repository';
import { UsersInventoryRepository } from '../users/repositories/users-inventory.repository';

@Module({
  imports: [CustomRepositoryModule.forCustomRepository([PaymentsRepository, UsersInventoryRepository])],
  controllers: [PaymentsController],
  providers: [PaymentsService],
  exports: [PaymentsService]
})
export class PaymentsModule {}

import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payments } from './payments.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Payments]), UsersModule],
  controllers: [PaymentsController],
  providers: [PaymentsService]
})
export class paymentsModule {}

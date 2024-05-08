import { Module } from '@nestjs/common';
import { PromisesController } from './promises.controller';
import { PromisesService } from './promises.service';

@Module({
  controllers: [PromisesController],
  providers: [PromisesService]
})
export class PromisesModule {}

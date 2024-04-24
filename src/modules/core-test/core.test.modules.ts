import { Module } from '@nestjs/common';
import { CoreTestController } from './core.test.controller';
import { CoreTestService } from './core.test.service';

@Module({
  controllers: [CoreTestController],
  providers: [CoreTestService]
})
export class CoreTestModule {}

import { Module, ValidationPipe } from '@nestjs/common';
import importModules from './modules';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [...importModules],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe
    }
  ]
})
export class AppModule {}

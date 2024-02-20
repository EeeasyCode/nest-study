import { Module } from '@nestjs/common';
import importModules from './modules';

@Module({
  imports: [...importModules],
  controllers: [],
  providers: []
})
export class AppModule {}

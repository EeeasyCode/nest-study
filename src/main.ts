import { NestFactory } from '@nestjs/core';
import { AppModule } from './main.module';
import { ValidationPipe } from '@nestjs/common';
import { initializeTransactionalContext, StorageDriver } from 'typeorm-transactional';

async function bootstrap() {
  initializeTransactionalContext({ storageDriver: StorageDriver.AUTO });
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  app.useGlobalPipes(new ValidationPipe());
}
bootstrap();

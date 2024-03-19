import { NestFactory } from '@nestjs/core';
import { AppModule } from './main.module';
import { ValidationPipe } from '@nestjs/common';
import { initializeTransactionalContext, StorageDriver } from 'typeorm-transactional';
import { setupSwagger } from 'src/util/swagger';

async function bootstrap() {
  initializeTransactionalContext({ storageDriver: StorageDriver.AUTO });
  const app = await NestFactory.create(AppModule);

  setupSwagger(app);

  await app.listen(3000);
  app.useGlobalPipes(new ValidationPipe());
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './main.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  app.useGlobalPipes(new ValidationPipe());
}
bootstrap();

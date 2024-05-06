import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfigService } from '@/config/database.config.service';
import { paymentsModule } from './payments/payments.module';

const modules = [
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env'
  }),
  TypeOrmModule.forRootAsync({
    useClass: DatabaseConfigService
  }),
  UsersModule,
  paymentsModule
];

export default modules;

import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfigService } from '@/config/database.config.service';
import { PaymentsModule } from './payments/payments.module';

const modules = [
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: 'env/.env.dev'
  }),
  TypeOrmModule.forRootAsync({
    useClass: DatabaseConfigService
  }),
  UsersModule,
  PaymentsModule
];

export default modules;

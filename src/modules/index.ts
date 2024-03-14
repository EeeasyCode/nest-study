import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfigService } from '@/config/database.config.service';
import { PaymentsModule } from './payments/payments.module';
import { addTransactionalDataSource } from 'typeorm-transactional';
import { DataSource } from 'typeorm';

const modules = [
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: 'env/.env.dev'
  }),
  TypeOrmModule.forRootAsync({
    useClass: DatabaseConfigService,
    dataSourceFactory: async (options) => {
      if (!options) {
        throw new Error('Invalid options passed');
      }
      return addTransactionalDataSource(new DataSource(options));
    }
  }),
  UsersModule,
  PaymentsModule
];

export default modules;

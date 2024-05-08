import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfigService } from '@/config/database.config.service';
import { PromisesModule } from './promises/promises.module';

const modules = [
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: 'env/.env.dev'
  }),
  TypeOrmModule.forRootAsync({
    useClass: DatabaseConfigService
  }),
  UsersModule,
  PromisesModule
];

export default modules;

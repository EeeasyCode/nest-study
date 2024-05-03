import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfigService } from '@/config/database.config.service';
import { TestModule } from './db-study/test.module';

const modules = [
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: 'env/.env.dev'
  }),
  TypeOrmModule.forRootAsync({
    useClass: DatabaseConfigService
  }),
  UsersModule,
  TestModule
];

export default modules;

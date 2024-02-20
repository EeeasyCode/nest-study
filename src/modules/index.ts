import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseConfigService } from '@/config/database.config.service';

const modules = [
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: 'env/.env.dev'
  }),
  TypeOrmModule.forRootAsync({
    useClass: DatabaseConfigService
  }),
  UsersModule
];

export default modules;

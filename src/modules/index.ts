import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

const modules = [
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
  }),
  UsersModule,
];

export default modules;

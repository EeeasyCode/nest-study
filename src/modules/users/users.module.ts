import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { CustomRepositoryModule } from '@/core/decorators/custom.repository.module';
import { UserRepository } from './repositories/users.repository';
import { UserDetailRepository } from './repositories/users.detail.repository';

@Module({
  imports: [CustomRepositoryModule.forCustomRepository([UserRepository, UserDetailRepository])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}

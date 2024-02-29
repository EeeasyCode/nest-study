import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { Users } from './entities/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './repositories/users.repository';
import { CustomRepositoryModule } from '@/core/decorators/custom.repository.module';
import { UsersInventoryRepository } from './repositories/users-inventory.repository';

@Module({
  imports: [CustomRepositoryModule.forCustomRepository([UsersRepository, UsersInventoryRepository])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}

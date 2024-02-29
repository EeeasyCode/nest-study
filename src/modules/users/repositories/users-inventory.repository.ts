import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Users } from '../entities/users.entity';
import { JoinUserDto } from '../dtos/join-user.dto';
import { CustomRepository } from '@/core/decorators/custom.repository.decorator';
import { UsersInventory } from '../entities/users-inventory.entity';

@CustomRepository(UsersInventory)
export class UsersInventoryRepository extends Repository<UsersInventory> {
  async updateInventory(userId: number, passTicket?: number, matchTicket?: number, point?: number) {
    const a = await this.save({
      user_id: userId,
      passTicket: passTicket,
      matchTicket: matchTicket,
      point: point
    });
    console.log(a);
  }
}

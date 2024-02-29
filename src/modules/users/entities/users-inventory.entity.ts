import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Users } from './users.entity';

@Entity({ name: 'users_inventory' })
export class UsersInventory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pass_ticket_amount: number;

  @Column()
  match_ticket_amount: number;

  @Column()
  point_amount: number;

  @ManyToOne(() => Users, (user) => user.id)
  user: Users;

  @Column()
  user_id: number;
}

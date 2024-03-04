import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Users, (user) => user)
  user: number;
}

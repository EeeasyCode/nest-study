import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

import * as bcrypt from 'bcrypt';
import { Users } from '@/modules/users/entities/users.entity';

@Entity({ name: 'payments' })
export class Payments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  payment_type: string;

  @Column()
  payment_product: string;

  @Column()
  payment_amount: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Users, (user) => user.id)
  user: Users;

  @Column()
  user_id: number;
}

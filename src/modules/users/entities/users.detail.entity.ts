import { BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import * as bcrypt from 'bcrypt';

@Entity({ name: 'user_detail' })
export class UserDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;
}

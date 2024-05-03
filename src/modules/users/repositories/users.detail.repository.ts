import { DataSource, Repository } from 'typeorm';
import { CustomRepository } from '@/core/decorators/custom.repository.decorator';
import { UserDetail } from '../entities/users.detail.entity';

@CustomRepository(UserDetail)
export class UserDetailRepository extends Repository<UserDetail> {}

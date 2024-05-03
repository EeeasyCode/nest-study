import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Test } from './test.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test, 'default')
    private testRepository: Repository<Test>
  ) {}
  async test() {
    await this.testRepository.find();
  }
}

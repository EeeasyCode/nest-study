import { Controller, Get } from '@nestjs/common';
import { PromisesService } from './promises.service';

@Controller('promises')
export class PromisesController {
  constructor(private readonly promisesService: PromisesService) {}

  @Get()
  async asyncTest() {
    const test = await this.promisesService.asyncTest();
    console.log(test);
  }
}

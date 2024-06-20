import { Controller, Get } from '@nestjs/common';
import { AppService, Todo } from './app.service';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<Todo> {
    const data = await this.appService.getHello();

    return data;
  }
}

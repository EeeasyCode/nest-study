import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Exclude, plainToClass } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { Observable, lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';

export class Todo {
  userId: number;
  id: number;
  title: string;
  @Exclude()
  completed: number;
}
@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  async getHello(): Promise<Todo> {
    const { data } = await lastValueFrom(
      this.httpService.get('https://jsonplaceholder.typicode.com/todos/1'),
    );
    return plainToClass(Todo, data);

    // return this.httpService
    //   .get('https://jsonplaceholder.typicode.com/todos/1')
    //   .toPromise();
  }
  // getHello(): Observable<AxiosResponse<Todo>> {
  //   return this.httpService
  //     .get('https://jsonplaceholder.typicode.com/todos/1')
  //     .pipe(map((res) => res.data));
  // }
}

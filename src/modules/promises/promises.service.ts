import { Injectable } from '@nestjs/common';

@Injectable()
export class PromisesService {
  constructor() {}

  async asyncTest() {
    try {
      throw new Error();
      return 'resolved:::';
    } catch (e) {
      throw new Error('rejected:::');
    }
  }
}

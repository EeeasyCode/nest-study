import { Injectable, SetMetadata } from '@nestjs/common';

export const CUSTOM_DECORATOR = Symbol('CUSTOM_DECORATOR');
export const CustomDecorator = SetMetadata(CUSTOM_DECORATOR, 'test-value');

@CustomDecorator
@Injectable()
export class CoreTestService {
  test() {}
}

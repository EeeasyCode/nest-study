import { SetMetadata } from '@nestjs/common';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';

export const CUSTOM_REPOSITORY = 'CUSTOM_REPOSITORY';

export function CustomRepository(entity: EntityClassOrSchema): ClassDecorator {
  return SetMetadata(CUSTOM_REPOSITORY, entity);
}

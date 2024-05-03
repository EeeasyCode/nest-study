// import { Injectable } from '@nestjs/common';
// import { DiscoveryService } from '@nestjs/core';

// @Injectable()
// export class ExplorerService {
//   constructor(private readonly discoveryService: DiscoveryService) {}

//   find(metadataKey: string | symbol) {
//     const providers = this.discoveryService.getProviders();
//     return providers
//       .filter((wrapper) => wrapper.isDependencyTreeStatic())
//       .filter(({ metatype, instance }) => {
//         if (!instance || !metatype) {
//           return false;
//         }
//         return Reflect.getMetadata(metadataKey, metatype);
//       })
//       .map(({ instance }) => instance);
//   }
// }

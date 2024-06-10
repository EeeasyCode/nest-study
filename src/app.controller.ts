import { Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(@Req() request: Request): string {
    return request.headers.middlewareCalled
      ? '/ endpoint called with middleware'
      : '/ endpoint called without middleware';
  }

  @Get('/all')
  getAll(@Req() request: Request): string {
    return request.headers.middlewareCalled
      ? '/all endpoint called with middleware'
      : '/all endpoint called without middleware';
  }

  @Get('/all/:id')
  getAllId(@Req() request: Request): string {
    return request.headers.middlewareCalled
      ? '/all/:id endpoint called with middleware'
      : '/all/:id endpoint called without middleware';
  }

  @Get('/:id')
  getId(@Param('id') id: number, @Req() request: Request): string {
    return request.headers.middlewareCalled
      ? '/:id endpoint called with middleware'
      : '/:id endpoint called without middleware';
  }

  @Get('/test')
  getTest(@Req() request: Request): string {
    return request.headers.middlewareCalled
      ? '/:test endpoint called with mtestdleware'
      : '/:test endpoint called without middleware';
  }
}

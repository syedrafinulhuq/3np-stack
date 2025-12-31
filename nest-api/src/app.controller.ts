import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('status')
  getStatus() {
    return { ok: true, service: 'NestJS API', version: '1.0.0' };
  }
}

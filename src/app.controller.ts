import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Logger } from './config/loggerConfig/AppLogger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {

    Logger.info('hola');
    return this.appService.getHello();
  }
}

import { Controller, Get, NotFoundException, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller('photos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':filename')
  async downloadFile(
    @Param('filename') filename: string,
    @Res() res: Response,
  ) {
    const filePath = this.appService.getFilePath(filename);
    if (!filePath) {
      throw new NotFoundException('Photo not found');
    }

    res.sendFile(filePath);
  }
}

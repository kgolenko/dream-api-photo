import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { existsSync, readdirSync, unlinkSync } from 'fs';
import { join } from 'path';

@Injectable()
export class AppService {
  private readonly photosDirectory = process.env.PHOTOS_DIRECTORY;

  getFilePath(filename: string): string | null {
    const filePath = join(this.photosDirectory, filename);
    if (existsSync(filePath)) {
      return filePath;
    }

    return null;
  }

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  clearPhotosDirectory(): void {
    if (existsSync(this.photosDirectory)) {
      const files = readdirSync(this.photosDirectory);
      for (const file of files) {
        unlinkSync(join(this.photosDirectory, file));
      }
    }
  }
}

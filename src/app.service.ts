import { Injectable } from '@nestjs/common';
import { existsSync } from 'fs';
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
}

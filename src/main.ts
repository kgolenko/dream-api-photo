import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const port = 54460;

  const app = await NestFactory.create(AppModule);
  await app.listen(port, () =>
    console.log(`Photo service listening on port ${port}`),
  );
}
bootstrap();

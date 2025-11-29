import { loadEnvFile } from 'process';

loadEnvFile();

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const port = process.env.PORT ?? 3001;

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  await app.listen(port, () => {
    Logger.log(`Application is running on port: ${port}`, 'Main');
  });
}
void bootstrap();

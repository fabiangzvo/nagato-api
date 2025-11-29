import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './health/controllers/app.controller';
import { AppService } from './health/services/app.service';
import { IntegrationsModule } from './integrations/integrations.module';
import { dataSourceOptions, dataSourceFactory } from './config/database.config';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => dataSourceOptions,
      dataSourceFactory,
    }),
    TypeOrmModule.forFeature([]),
    IntegrationsModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

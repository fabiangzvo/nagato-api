import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IntegrationsModule } from '@integrations/integrations.module';
import { AppController } from '@health/controllers/app.controller';
import { AppService } from '@health/services/app.service';
import { CommonModule } from '@common/common.module';
import { User } from '@common/entities/user.entity';
import { Status } from '@common/entities/status.entity';
import { Integration } from '@integrations/entities/integration.entity';
import { Provider } from '@/common/entities/provider.entity';

import { dataSourceOptions, dataSourceFactory } from './config/database.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => dataSourceOptions,
      dataSourceFactory,
    }),
    TypeOrmModule.forFeature([User, Status, Integration, Provider]),
    IntegrationsModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';

import { StatusRepository } from '@common/repositories/status.repository';
import { UserRepository } from '@common/repositories/user.repository';
import { ProviderRepository } from '@common/repositories/provider.repository';

import { IntegrationsService } from './services/integrations.service';
import { IntegrationsController } from './controllers/integrations.controller';
import { IntegrationsRepository } from './repositories/integration.repository';

@Module({
  controllers: [IntegrationsController],
  providers: [
    IntegrationsService,
    StatusRepository,
    IntegrationsRepository,
    UserRepository,
    ProviderRepository,
  ],
})
export class IntegrationsModule {}

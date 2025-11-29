import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { Provider } from '../entities/provider.entity';

@Injectable()
export class ProviderRepository {
  constructor(private readonly instance: EntityManager) {}

  async getProviderById(id: string): Promise<Provider | null> {
    const provider = await this.instance
      .getRepository(Provider)
      .findOneBy({ id });

    return provider ?? null;
  }
}

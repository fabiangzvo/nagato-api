import { EntityManager, ObjectLiteral, FindManyOptions } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

import { Integration } from '../entities/integration.entity';

@Injectable()
export class IntegrationsRepository {
  constructor(private readonly instance: EntityManager) {}

  async create(
    record: QueryDeepPartialEntity<Integration>,
  ): Promise<ObjectLiteral | null> {
    const result = await this.instance
      .getRepository(Integration)
      .insert(record);

    return result.identifiers[0];
  }

  findAndCount(
    filters?: FindManyOptions<Integration>,
  ): Promise<[Integration[], number]> {
    return this.instance.getRepository(Integration).findAndCount(filters);
  }

  async softRemove(id: string): Promise<boolean> {
    const { affected } = await this.instance
      .getRepository(Integration)
      .update({ id }, { softRemoved: true });

    return !!affected;
  }

  async update(
    id: string,
    data: Partial<Integration>,
  ): Promise<Integration | null> {
    const { affected } = await this.instance
      .getRepository(Integration)
      .update({ id }, data);

    if (!affected) return null;

    return this.findOneById(id);
  }

  findOneById(id: string): Promise<Integration | null> {
    return this.instance
      .getRepository(Integration)
      .findOne({ where: { id }, relations: { status: true, provider: true } });
  }
}

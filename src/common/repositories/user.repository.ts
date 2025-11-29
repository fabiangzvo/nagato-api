import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(private readonly instance: EntityManager) {}

  async getUserById(id: string): Promise<User | null> {
    const user = await this.instance.getRepository(User).findOneBy({ id });

    return user ?? null;
  }
}

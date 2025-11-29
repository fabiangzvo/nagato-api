import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Integration } from '@integrations/entities/integration.entity';

@Entity()
export class Provider {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Integration, (integration) => integration.provider)
  integrations: Integration[];

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;
}

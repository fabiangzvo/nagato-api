import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Integration } from 'src/integrations/entities/integration.entity';

@Entity()
export class Status {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Integration, (integration) => integration.statusId)
  integrations: Integration[];

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;
}

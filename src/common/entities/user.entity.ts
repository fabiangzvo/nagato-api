import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Integration } from 'src/integrations/entities/integration.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ name: 'email_verified' })
  emailVerified: boolean;

  @Column()
  image: string;

  @OneToMany(() => Integration, (integration) => integration.userId)
  integrations: Integration[];

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;
}

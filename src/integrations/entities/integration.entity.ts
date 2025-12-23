import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { Status } from '@common/entities/status.entity';
import { User } from '@common/entities/user.entity';
import { Provider } from '@/common/entities/provider.entity';

@Entity()
export class Integration {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ name: 'account_id' })
  accountId: string;

  @Column({ name: 'api_key' })
  apiKey: string;

  @Column({ name: 'enabled' })
  enabled: boolean;

  @Column({ name: 'soft_removed' })
  softRemoved: boolean;

  @Column({ type: 'json', nullable: true })
  settings: Record<string, any>;

  @ManyToOne(() => User, (user) => user.integrations)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToOne(() => Status, (status) => status.integrations)
  @JoinColumn({ name: 'status_id' })
  status: Status;

  @ManyToOne(() => Provider, (provider) => provider.integrations)
  @JoinColumn({ name: 'provider_id' })
  provider: Provider;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'image' })
  image: string;

  @Column({ name: 'token' })
  token: string;
}

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';

import { Status } from 'src/common/entities/status.entity';
import { User } from 'src/common/entities/user.entity';

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

  @Column()
  settings: Record<string, any>;

  @ManyToOne(() => User, (user) => user.integrations)
  userId: User;

  @OneToOne(() => Status, (status) => status.integrations)
  statusId: Status;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;
}

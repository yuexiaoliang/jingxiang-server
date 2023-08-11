import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { UserProfileEntity } from './user-profile.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, comment: '用户名' })
  username: string;

  @Column({ comment: '密码' })
  password: string;

  @Column({ unique: true, comment: '联系方式' })
  contact: string;

  @Column({
    name: 'registration_time',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    comment: '注册时间',
  })
  registrationTime: Date;

  @Column({
    name: 'update_time',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
    comment: '修改时间',
  })
  updateTime: Date;

  @Column({ type: 'integer', default: 1, comment: '状态：0 停用 1 可用' })
  status: number;

  @OneToOne(() => UserProfileEntity, (profile) => profile.user)
  @JoinColumn()
  profile: UserProfileEntity;
}

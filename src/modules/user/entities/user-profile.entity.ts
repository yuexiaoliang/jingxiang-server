import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity()
export class UserProfileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id', unique: true, comment: '用户ID' })
  userId: string;

  @Column({
    name: 'account_balance',
    comment: '账户余额/元',
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  accountBalance: number;

  @Column({
    name: 'total_study_time',
    type: 'integer',
    default: 0,
    comment: '累计学习时长/分钟',
  })
  totalStudyTime: number;

  @Column({ type: 'integer', default: 0, comment: '积分' })
  points: number;

  @OneToOne(() => UserEntity, (user) => user.profile)
  user: UserEntity;
}

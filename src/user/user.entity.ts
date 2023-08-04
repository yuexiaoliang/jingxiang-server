import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'open_id', unique: true, comment: '小程序 OpenID' })
  openId: string;

  @Column({
    name: 'union_id',
    unique: true,
    nullable: true,
    comment: '小程序 UnionID',
  })
  unionId: string;

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

  @Column({
    name: 'account_balance',
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    comment: '账户余额',
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

  @Column({ type: 'integer', default: 1, comment: '状态：0 停用 1 可用' })
  status: number;
}

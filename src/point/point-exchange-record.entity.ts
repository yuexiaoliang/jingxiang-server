import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'point-exchange-record',
})
export class Exchange {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id', comment: '用户ID' })
  userId: number;

  @Column({ name: 'type_id', comment: '兑换项目ID' })
  typeId: number;

  @Column({ name: 'create_time', type: 'timestamp', comment: '兑换时间' })
  createTime: Date;

  @Column({ comment: '数量', default: 1 })
  count: number;
}

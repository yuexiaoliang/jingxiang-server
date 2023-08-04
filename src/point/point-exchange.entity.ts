import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'point_exchange',
})
export class Exchange {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: '项目名称' })
  name: string;

  @Column({ name: 'points_required', type: 'integer', comment: '所需积分数量' })
  pointsRequired: number;

  @Column({ comment: '兑换门槛，达到最低积分才能兑换' })
  threshold: number;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserIDMappingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id', unique: true, comment: '用户ID' })
  userId: string;

  @Column({ name: 'wx_open_id', unique: true, comment: '微信小程序 OpenID' })
  openId: string;

  @Column({
    name: 'wx_union_id',
    unique: true,
    nullable: true,
    comment: '微信小程序 UnionID',
  })
  unionId: string;
}

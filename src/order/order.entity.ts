import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  RelationId,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

export enum OrderType {
  PRODUCT = 'product',
  SERVICE = 'service',
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: OrderType;

  @Column({
    nullable: true,
  })
  product_type_id: number;

  @Column({
    nullable: true,
  })
  service_type_id: number;

  @ManyToOne(() => Product, { eager: true, nullable: true })
  @JoinColumn({ name: 'product_type_id', referencedColumnName: 'id' })
  product: Product;

  @ManyToOne(() => Service, { eager: true, nullable: true })
  @JoinColumn({ name: 'service_type_id', referencedColumnName: 'id' })
  service: Service;

  @RelationId((order: Order) => order.product)
  productId: number;

  @RelationId((order: Order) => order.service)
  serviceId: number;
}

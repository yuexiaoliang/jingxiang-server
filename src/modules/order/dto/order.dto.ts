import { ApiProperty } from '@nestjs/swagger';
import { OrderType } from '../entities/order.entity';

export class CreateOrderRequestBodyDto {
  @ApiProperty({ enum: OrderType })
  type: OrderType;

  @ApiProperty({
    required: false,
    nullable: true,
  })
  product_type_id: number;

  @ApiProperty({
    required: false,
    nullable: true,
  })
  service_type_id: number;
}

export class Order {
  @ApiProperty()
  id: number;
}

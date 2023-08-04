import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateOrderRequestBodyDto, Order } from './order.dto';

@Controller('order')
@ApiTags('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('all')
  @ApiResponse({ type: [Order] })
  findAll() {
    return this.orderService.findAll();
  }

  @Post('create')
  @ApiResponse({
    status: 201,
    description: '创建成功',
    type: Order,
  })
  create(@Body() data: CreateOrderRequestBodyDto) {
    return this.orderService.create(data);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: '删除成功',
    type: null,
  })
  delete(@Param('id') id: number) {
    return this.orderService.delete(id);
  }
}

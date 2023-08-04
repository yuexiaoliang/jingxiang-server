import { InjectRepository } from '@nestjs/typeorm';
import { Body, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { ApiResponse } from '@nestjs/swagger';
import { CreateOrderRequestBodyDto } from './order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  findAll() {
    return this.orderRepository.find();
  }

  create(data: CreateOrderRequestBodyDto) {
    return this.orderRepository.save(data);
  }

  delete(id: number) {
    return this.orderRepository.delete(id);
  }
}

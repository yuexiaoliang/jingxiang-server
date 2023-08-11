import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserRequestBodyDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll() {
    const res = await this.userRepository.find();
    return {
      data: res,
      code: 0,
      message: '获取用户列表成功',
    };
  }

  async create(data: CreateUserRequestBodyDto) {
    try {
      const res = await this.userRepository.save(data);
      return {
        data: res,
        code: 0,
        message: '创建用户成功',
      };
    } catch (error) {
      throw new HttpException('创建用户失败', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

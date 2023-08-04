import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserRequestBodyDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  getUsers() {
    return this.userRepository.find();
  }

  async create(data: CreateUserRequestBodyDto) {
    try {
      const res = await this.userRepository.save(data);
      return res;
    } catch (error) {
      throw new HttpException('创建用户失败', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

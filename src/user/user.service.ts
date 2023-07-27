import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(private configService: ConfigService) {}

  findAll() {
    const db = this.configService.get('db');
    return db;
  }
}

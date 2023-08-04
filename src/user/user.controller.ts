import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserRequestBodyDto, UserDto } from './user.dto';

@Controller('user')
@ApiTags('用户')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  @ApiResponse({ type: [UserDto] })
  getUsers() {
    return this.userService.getUsers();
  }

  @Post('create')
  @ApiBody({ type: CreateUserRequestBodyDto })
  @ApiResponse({
    status: 201,
    type: UserDto,
    description: '创建用户成功',
  })
  create(@Body() data: CreateUserRequestBodyDto) {
    return this.userService.create(data);
  }
}

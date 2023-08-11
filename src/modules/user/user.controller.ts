import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserRequestBodyDto, UserDto } from './dto/user.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiResponse({ type: [UserDto] })
  findAll() {
    return this.userService.findAll();
  }

  @Post()
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

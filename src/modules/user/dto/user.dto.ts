import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserRequestBodyDto {
  @ApiProperty({
    name: 'openId',
    description: '小程序 OpenID',
  })
  @IsString()
  openId: string;

  @ApiProperty({
    name: 'contact',
    description: '联系方式',
  })
  @IsString()
  contact: string;
}

export class UserDto {
  @ApiProperty()
  id: number;

  @ApiProperty({
    name: 'openId',
    description: '小程序 OpenID',
  })
  openId: string;

  @ApiProperty({
    name: 'unionId',
    description: '小程序 UnionID',
    required: false,
  })
  unionId: string;

  @ApiProperty({
    name: 'contact',
    description: '联系方式',
  })
  contact: string;

  @ApiProperty({
    name: 'registrationTime',
    description: '注册时间',
  })
  registrationTime: Date;

  @ApiProperty({
    name: 'updateTime',
    description: '修改时间',
  })
  updateTime: Date;

  @ApiProperty({
    name: 'accountBalance',
    description: '账户余额',
  })
  accountBalance: number;

  @ApiProperty({
    name: 'totalStudyTime',
    description: '累计学习时长/分钟',
  })
  totalStudyTime: number;

  @ApiProperty({
    name: 'points',
    description: '积分',
  })
  points: number;

  @ApiProperty({
    name: 'status',
    description: '状态：0 停用 1 可用',
  })
  status: number;
}

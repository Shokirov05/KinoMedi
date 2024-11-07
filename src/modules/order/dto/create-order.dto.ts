// src/order/dto/create-order.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty()
  @IsString()
  userID: string;

  @ApiProperty()
  @IsString()
  subscription: string;

  @ApiProperty()
  @IsString()
  promocod: string;

  @ApiProperty()
  @IsDateString()
  startData: Date;

  @ApiProperty()
  @IsDateString()
  endData: Date;
}

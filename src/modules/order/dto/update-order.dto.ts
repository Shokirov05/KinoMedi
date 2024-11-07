// src/order/dto/update-order.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString } from 'class-validator';

export class UpdateOrderDto {
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

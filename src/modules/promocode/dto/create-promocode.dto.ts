// src/promocode/dto/create-promocode.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsDateString } from 'class-validator';

export class CreatePromocodeDto {
  @ApiProperty()
  @IsString()
  promo: string;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsDateString()
  promDate: Date;
}

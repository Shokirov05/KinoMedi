// src/payment/dto/update-payment.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class UpdatePaymentDto {
  @ApiProperty()
  @IsString()
  orderID: string;

  @ApiProperty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsString()
  status: string;

  @ApiProperty()
  @IsString()
  card: string;
}

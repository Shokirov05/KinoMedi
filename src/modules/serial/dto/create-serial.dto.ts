// src/serial/dto/create-serial.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class CreateSerialDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  genre: string;

  @ApiProperty()
  @IsString()
  year: string;

  @ApiProperty()
  @IsString()
  language: string;

  @ApiProperty()
  @IsString()
  age_limit: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  serial_vid?: string;

  @ApiProperty()
  @IsString()
  image: string;
}

// src/serialvid/dto/create-serialvid.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSerialVidDto {
  @ApiProperty()
  @IsString()
  partName: string;

  @ApiProperty()
  @IsString()
  duration: string;

  @ApiProperty()
  @IsString()
  video: string;
}

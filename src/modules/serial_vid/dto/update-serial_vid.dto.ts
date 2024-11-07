// src/serialvid/dto/update-serialvid.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateSerialVidDto {
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

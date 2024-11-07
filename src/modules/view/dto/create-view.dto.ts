// src/view/dto/create-view.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean } from 'class-validator';

export class CreateViewDto {
  @ApiProperty()
  @IsString()
  userId: string;

  @ApiProperty()
  @IsString()
  movie: string;

  @ApiProperty()
  @IsString()
  serial: string;

  @ApiProperty()
  @IsBoolean()
  like: boolean;
}

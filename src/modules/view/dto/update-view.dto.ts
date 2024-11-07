// src/view/dto/update-view.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean } from 'class-validator';

export class UpdateViewDto {
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

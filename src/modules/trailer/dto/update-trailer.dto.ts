// src/trailer/dto/update-trailer.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class UpdateTrailerDto {
  @ApiProperty()
  @IsNumber()
  movie_id: number;

  @ApiProperty()
  @IsString()
  serialID: string;

  @ApiProperty()
  @IsString()
  video: string;

  @ApiProperty()
  @IsString()
  tr_like: string;

  @ApiProperty()
  @IsString()
  tr_comment: string;

  @ApiProperty()
  @IsString()
  genreId: string;
}

// src/trailer/dto/create-trailer.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateTrailerDto {
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

// src/trailer-comment/dto/create-trailer-comment.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateTrailerCommentDto {
  @ApiProperty()
  @IsNumber()
  trailer_id: number;

  @ApiProperty()
  @IsString()
  user_id: string;

  @ApiProperty()
  @IsString()
  comment_text: string;

  @ApiProperty()
  created_at: Date;
}

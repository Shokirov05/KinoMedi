// src/trailer-comment/dto/update-trailer-comment.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsString,  } from 'class-validator';

export class UpdateTrailerCommentDto {

  @ApiProperty()
  @IsString()
  comment_text: string;
}

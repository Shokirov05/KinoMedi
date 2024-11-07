import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateTrailerLikeDto {
  @ApiProperty()
  @IsNumber()
  trailer_id: number;

  @ApiProperty()
  @IsString()
  user_id: string;

  @ApiProperty()
  created_at: Date;
}

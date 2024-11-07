import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateGenreDto {
  @ApiProperty({
    description: 'The name of the genre',
    example: 'Drama', 
    required: false, 
  })
  @IsString()
  @IsOptional()
  Name: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class CreateActorDto {
  @ApiProperty({ description: 'The first name of the actor' })
  @IsString()
  firstName: string;

  @ApiProperty({ description: 'The last name of the actor' })
  @IsString()
  lastName: string;

  @ApiProperty({ description: 'The image URL of the actor' })
  @IsString()
  image: string;

  @ApiProperty({ description: 'The movie that the actor appeared in' })
  @IsString()
  movie: string;

  @ApiProperty({ description: 'The serial that the actor appeared in', required: false })
  @IsString()
  @IsOptional()
  serial?: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class UpdateActorDto {
  @ApiProperty({ description: 'The first name of the actor', required: false })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiProperty({ description: 'The last name of the actor', required: false })
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiProperty({ description: 'The image URL of the actor', required: false })
  @IsString()
  @IsOptional()
  image?: string;

  @ApiProperty({ description: 'The movie that the actor appeared in', required: false })
  @IsString()
  @IsOptional()
  movie?: string;

  @ApiProperty({ description: 'The serial that the actor appeared in', required: false })
  @IsString()
  @IsOptional()
  serial?: string;
}
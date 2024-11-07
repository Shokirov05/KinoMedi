import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsUUID } from 'class-validator';

export class UpdateCardDto {
  @ApiProperty({ description: 'UUID of the user associated with the card', required: false })
  @IsUUID()
  @IsOptional()
  userID?: string;

  @ApiProperty({ description: 'Card number', example: '4111111111111111', required: false })
  @IsString()
  @IsOptional()
  card_number?: string;

  @ApiProperty({ description: 'Card data (e.g., expiration date, billing address)', required: false })
  @IsString()
  @IsOptional()
  cardData?: string;

  @ApiProperty({ description: 'The CVV of the card', example: '123', required: false })
  @IsString()
  @IsOptional()
  CVV?: string;

  @ApiProperty({ description: 'The type of card (e.g., Visa, MasterCard)', required: false })
  @IsString()
  @IsOptional()
  cardType?: string;
}
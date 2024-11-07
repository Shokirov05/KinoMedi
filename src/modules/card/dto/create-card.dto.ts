import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class CreateCardDto {
  @ApiProperty({ description: 'UUID of the user associated with the card' })
  @IsUUID()
  userID: string;

  @ApiProperty({ description: 'Card number', example: '4111111111111111' })
  @IsString()
  card_number: string;

  @ApiProperty({ description: 'Card data (e.g., expiration date, billing address)', example: 'Exp: 12/24' })
  @IsString()
  cardData: string;

  @ApiProperty({ description: 'The CVV of the card', example: '123' })
  @IsString()
  CVV: string;

  @ApiProperty({ description: 'The type of card (e.g., Visa, MasterCard)', example: 'Visa' })
  @IsString()
  cardType: string;
}



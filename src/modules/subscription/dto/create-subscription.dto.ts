import { IsString, IsDate, IsEnum } from 'class-validator';
import { SubscriptionDuration } from '../enum/duration.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSubscriptionDto {
  @ApiProperty()
  @IsString()
  subName: string;

  @ApiProperty()
  @IsString()
  price: string;

  @ApiProperty()
  @IsDate()
  subData: Date;

  @ApiProperty()
  @IsEnum(SubscriptionDuration)
  duration: SubscriptionDuration;
}

import { IsString, IsEmail, IsEnum } from 'class-validator';
import { UserRole } from '../enum/user-role.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @IsString()
  order: string;

  @IsEnum(UserRole)
  role: UserRole;

  @ApiProperty()
  @IsString()
  password: string;
}

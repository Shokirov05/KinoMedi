import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserDocument, UserSchema } from './schema/user.schema'; 
import { UsersService } from './users.service'; 
import { UsersController } from './users.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: UserDocument.name, schema: UserSchema }])],
  providers: [UsersService],
  exports: [UsersService],  
  controllers: [UsersController]
})
export class UsersModule {}

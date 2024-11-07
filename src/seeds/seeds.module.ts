import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '../modules/users/users.module'; 
import { UserSeedService } from './seeds.service'; 
import { UserDocument, UserSchema } from '../modules/users/schema/user.schema'; 

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserDocument.name, schema: UserSchema }]), 
    UsersModule,  
  ],
  providers: [UserSeedService], 
})
export class SeedsModule {}

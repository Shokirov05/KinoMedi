import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ActorController } from './actor.controller';
import { ActorService } from './actor.service';
import { ActorSchema } from './schema/actor.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Actor', schema: ActorSchema }]),
  ],
  controllers: [ActorController],
  providers: [ActorService],
})
export class ActorModule {}

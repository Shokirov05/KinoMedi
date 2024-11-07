import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrailerLikeController } from './trailer_likes.controller';
import { TrailerLikeService } from './trailer_likes.service';
import { TrailerLike, TrailerLikeSchema } from './schema/tl.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TrailerLike.name, schema: TrailerLikeSchema }]),
  ],
  controllers: [TrailerLikeController],
  providers: [TrailerLikeService],
})
export class TrailerLikeModule {}

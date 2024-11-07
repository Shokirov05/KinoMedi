// src/trailer-comment/trailer-comment.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrailerCommentController } from './trailer_comments.controller';
import { TrailerCommentService } from './trailer_comments.service';
import { TrailerComment, TrailerCommentSchema } from './schema/tc.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TrailerComment.name, schema: TrailerCommentSchema }]),
  ],
  controllers: [TrailerCommentController],
  providers: [TrailerCommentService],
})
export class TrailerCommentModule {}

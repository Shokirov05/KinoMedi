// src/trailer-comment/schema/trailer-comment.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class TrailerComment extends Document {
  @Prop({ required: true })
  trailer_id: number;

  @Prop({ required: true })
  user_id: string;

  @Prop({ required: true })
  comment_text: string;

  @Prop({ required: true })
  created_at: Date;
}

export const TrailerCommentSchema = SchemaFactory.createForClass(TrailerComment);

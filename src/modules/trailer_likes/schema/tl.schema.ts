import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class TrailerLike extends Document {
  @Prop({ required: true })
  trailer_id: number;

  @Prop({ required: true })
  user_id: string;

  @Prop({ required: true })
  created_at: Date;
}

export const TrailerLikeSchema = SchemaFactory.createForClass(TrailerLike);

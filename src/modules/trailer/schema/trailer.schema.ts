// src/trailer/schema/trailer.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Trailer extends Document {
  @Prop({ required: true })
  movie_id: number;

  @Prop({ required: true })
  serialID: string;

  @Prop({ required: true })
  video: string;

  @Prop({ required: true })
  tr_like: string;

  @Prop({ required: true })
  tr_comment: string;

  @Prop({ required: true })
  genreId: string;
}

export const TrailerSchema = SchemaFactory.createForClass(Trailer);

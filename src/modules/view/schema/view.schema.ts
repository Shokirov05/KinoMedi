// src/view/schema/view.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class View extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  movie: string;

  @Prop({ required: true })
  serial: string;

  @Prop({ required: true })
  like: boolean;
}

export const ViewSchema = SchemaFactory.createForClass(View);

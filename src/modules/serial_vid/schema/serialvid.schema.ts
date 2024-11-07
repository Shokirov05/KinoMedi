// src/serialvid/schema/serialvid.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class SerialVid extends Document {
  @Prop({ required: true })
  partName: string;

  @Prop({ required: true })
  duration: string;

  @Prop({ required: true })
  video: string;
}

export const SerialVidSchema = SchemaFactory.createForClass(SerialVid);

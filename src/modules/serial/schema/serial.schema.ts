// src/serial/schema/serial.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Serial extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  genre: string;

  @Prop({ required: true })
  year: string;

  @Prop({ required: true })
  language: string;

  @Prop({ required: true })
  age_limit: string;

  @Prop()
  serial_vid?: string;

  @Prop({ required: true })
  image: string;
}

export const SerialSchema = SchemaFactory.createForClass(Serial);

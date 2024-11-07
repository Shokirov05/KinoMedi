// src/promocode/schema/promocode.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Promocode extends Document {
  @Prop({ required: true })
  promo: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  promDate: Date;
}

export const PromocodeSchema = SchemaFactory.createForClass(Promocode);

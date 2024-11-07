// src/order/schema/order.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Order extends Document {
  @Prop({ required: true })
  userID: string;

  @Prop({ required: true })
  subscription: string;

  @Prop({ required: true })
  promocod: string;

  @Prop({ required: true })
  startData: Date;

  @Prop({ required: true })
  endData: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

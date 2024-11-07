import { Schema, Document } from 'mongoose';
import { Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { SubscriptionDuration } from '../enum/duration.enum';

@MongooseSchema()
export class Subscription extends Document {
  @Prop({ required: true })
  subName: string;

  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  subData: Date;

  @Prop({ required: true, enum: SubscriptionDuration })
  duration: SubscriptionDuration;
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);

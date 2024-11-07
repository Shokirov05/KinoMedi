import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Movie extends Document {
  @Prop({ required: true })
  movie_name: string;

  @Prop({ required: true })
  genre: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  year: string;

  @Prop({ required: true })
  language: string;

  @Prop({ required: true })
  duration: string;

  @Prop({ required: true })
  age_limit: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  video: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);

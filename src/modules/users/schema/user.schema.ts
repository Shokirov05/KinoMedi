import { Schema, Document } from 'mongoose';
import { Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { UserRole } from '../enum/user-role.enum';

@MongooseSchema({ collection: 'users' })  // Corrected 'collection' key
export class UserDocument extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: false })
  order: string;

  @Prop({required: false, enum: UserRole, default: UserRole.USER})
  role: UserRole;

  @Prop({ required: true })
  password: string;
}

// Create the schema
export const UserSchema = SchemaFactory.createForClass(UserDocument);

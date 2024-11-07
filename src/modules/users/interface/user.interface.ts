import { Schema, Document } from 'mongoose';
import { UserRole } from '../enum/user-role.enum';  

export interface UserInterface {
  firstName: string;
  lastName: string;
  email: string;
  order: string;
  role: UserRole;
  password: string;
}

export interface UserDocument extends UserInterface, Document {}

export const UserSchema = new Schema<UserDocument>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    order: { type: String, required: false },
    role: {
      type: String,
      required: false,
      enum: Object.values(UserRole),
      default: UserRole.USER,  
    },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

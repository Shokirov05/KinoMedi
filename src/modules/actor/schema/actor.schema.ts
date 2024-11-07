import { Schema } from 'mongoose';

export const ActorSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  image: { type: String, required: true },
  movie: { type: String, required: true },
  serial: { type: String, required: false },
});

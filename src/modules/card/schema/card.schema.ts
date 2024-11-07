import { Schema } from 'mongoose';

export const CardSchema = new Schema({
  userID: { type: String, required: true, unique: true }, // Assuming userID is a string type UUID
  card_number: { type: String, required: true, unique: true },
  cardData: { type: String, required: true },
  CVV: { type: String, required: true },
  cardType: { type: String, required: true },
}, { timestamps: true });

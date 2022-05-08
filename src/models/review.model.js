import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const reviewSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  product_id: { type: Schema.Types.ObjectId, required: true, ref: 'Post' },
  rating: { type: Number, required: true },
  description: { type: String, required: true },
}, { timestamps: true });

export default model('Review', reviewSchema);
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const cartSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, required: true, ref: 'User'},
  product_id: { type: Schema.Types.ObjectId, required: true, ref: 'Post' },  
  state: { type: Boolean, default: true },
  bought: { type: Boolean, default: false },
}, { timestamps: true });

export default model('Cart', cartSchema);
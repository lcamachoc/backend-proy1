import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const postSchema = new Schema({
    owner_id: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    img_url: { type: String, required: true },
    display_name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    created_date: { type: Date, default: Date.now },
}, { timestamps: true });

export default model('Post', postSchema);
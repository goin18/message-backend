import mongoose, { Schema } from 'mongoose';

const MessageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    // default: Date.now,
  },
  updatedAt: {
    type: Date,
    // default: Date.now,
  },
});

export default mongoose.models.Message || mongoose.model('Message', MessageSchema);
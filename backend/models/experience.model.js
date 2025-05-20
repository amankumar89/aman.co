import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  id: { type: String, required: true },
  role: { type: String, required: true },
  company: { type: String, required: true },
  duration: { type: String, required: true },
  description: { type: String, required: true },
});

export const Experience = mongoose.model('Experience', experienceSchema);

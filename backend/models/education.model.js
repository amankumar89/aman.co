import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  id: { type: String, required: true },
  degree: { type: String, required: true },
  institution: { type: String, required: true },
  duration: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
});

export const Education = mongoose.model('Education', educationSchema);

import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema({
  userDesc: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String, required: true },
  phone: { type: String, required: true }
});

export const About = mongoose.model('About', aboutSchema);

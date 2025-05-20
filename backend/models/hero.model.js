import mongoose from 'mongoose';

const heroSchema = new mongoose.Schema({
  header: { type: String, required: true },
  description: { type: String, required: true },
  linkedUrl: { type: String, required: true },
  github: { type: String, required: true },
  email: { type: String, required: true },
  twitter: { type: String, required: true },
});

export const Hero = mongoose.model('Hero', heroSchema);

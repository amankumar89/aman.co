import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags:{ type: [String], required: true },
  imageUrl: { type: String, required: true },
  link: { type: String, required: true },
});

export const Project = mongoose.model('Project', projectSchema);

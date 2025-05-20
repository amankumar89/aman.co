import mongoose from 'mongoose';

const skillItemSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  icon: { type: String, required: true }
});

const skillsSchema = new mongoose.Schema({
  ProgrammingLanguages: [skillItemSchema],
  Frontend: [skillItemSchema],
  Backend: [skillItemSchema],
  DevOps: [skillItemSchema],
  Tools: [skillItemSchema]
});

export const Skills = mongoose.model('Skills', skillsSchema);

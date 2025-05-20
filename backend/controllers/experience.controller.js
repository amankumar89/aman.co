import { Experience } from "../models/experience.model.js";

export async function getExperience(req, res) {
  const experience = await Experience.find();
  return res.json(experience);
}

export async function updateExperience(req, res) {
  const newExperience = new Experience(req.body);
  const saved = await newExperience.save();
  return res.json(saved);
}
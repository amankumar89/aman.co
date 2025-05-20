import { Skills } from "../models/skills.model.js";

export async function getSkills(req, res) {
  const skills = await Skills.find();
  return res.json(skills);
}

export async function updateSkills(req, res) {
  const newSkills = new Skills(req.body);
  const saved = await newSkills.save();
  return res.json(saved);
}
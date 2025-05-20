import { About } from "../models/about.model.js";

export async function getAbout(req, res) {
  const about = await About.find();
  return res.json(about);
}

export async function updateAbout(req, res) {
  const newAbout = new About(req.body);
  const saved = await newAbout.save();
  return res.json(saved);
}
import { Hero } from "../models/hero.model.js";

export async function getHero(req, res) {
  const data = await Hero.find();
  return res.json(data);
}

export async function updateHero(req, res) {
  const newHero = new Hero(req.body);
  const saved = await newHero.save();
  return res.json(saved);
}